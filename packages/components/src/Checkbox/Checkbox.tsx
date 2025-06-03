"use client";

import { html } from "@ethr/core";
import {
  capitalize,
  isNative,
  mergeRefs,
  useControlled,
  useFocusVisible,
  useId,
} from "@ethr/utils";
import { forwardRef, useEffect, useRef, useState } from "react";
import { colors } from "../globals.stylex";
import { checkboxStyles } from "./Checkbox.stylex";
import type { CheckboxOwnerState, CheckboxProps } from "./Checkbox.types";

function useUtilityStyles({
  checked,
  disabled,
  focusVisible,
  indeterminate,
  size,
  styles,
}: CheckboxOwnerState) {
  return {
    root: [
      checkboxStyles.root,
      checkboxStyles[`size${capitalize(size)}`],
      disabled && checkboxStyles.disabled,
      styles?.root,
    ],
    checkbox: [
      checkboxStyles.checkbox,
      checkboxStyles[`checkbox${capitalize(size)}`],
      disabled && checkboxStyles.checkboxDisabled,
      (checked || indeterminate) && [
        checkboxStyles.checkboxChecked,
        disabled && checkboxStyles.checkboxCheckedDisabled,
      ],
      styles?.checkbox,
    ],
    action: [
      checkboxStyles.action,
      focusVisible && checkboxStyles.actionFocusVisible,
      styles?.action,
    ],
    input: [checkboxStyles.input, styles?.input],
    label: [checkboxStyles.label, styles?.label],
  };
}

export const Checkbox = forwardRef(
  (inProps: CheckboxProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      checked: checkedProp,
      children,
      defaultChecked = false,
      disabled = false,
      id: idProp,
      indeterminate = false,
      onBlur,
      onFocus,
      onFocusVisible,
      readOnly = false,
      required = false,
      size = "medium",
      style,
      styles: stylesProp,
      value,
      ...props
    } = inProps;

    const id = useId(idProp);

    const [checked, setChecked] = useControlled({
      controlled: checkedProp,
      default: defaultChecked,
      name: "Checkbox",
      state: "checked",
    });

    const handleClick = () => {
      setChecked((prevChecked) => !prevChecked);
    };

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // Workaround for https://github.com/facebook/react/issues/9023
      if (event.nativeEvent.defaultPrevented === false) {
        setChecked(event.target.checked);
      }
    };

    const {
      focusVisibleRef,
      handleBlur: handleBlurVisible,
      handleFocus: handleFocusVisible,
      ref: inputRef,
    } = useFocusVisible();

    const [focusVisible, setFocusVisible] = useState(false);
    if (disabled && focusVisible) {
      setFocusVisible(false);
    }

    useEffect(() => {
      focusVisibleRef.current = focusVisible;
    }, [focusVisible, focusVisibleRef]);

    const innerInputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      // Fix for https://github.com/facebook/react/issues/7769
      if (!innerInputRef.current) {
        innerInputRef.current = event.currentTarget;
      }

      handleFocusVisible(event);

      if (focusVisibleRef.current === true) {
        setFocusVisible(true);
        onFocusVisible?.(event);
      }

      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      handleBlurVisible(event);

      if (focusVisibleRef.current === false) {
        setFocusVisible(false);
      }

      onBlur?.(event);
    };

    const ownerState = {
      checked,
      disabled,
      focusVisible,
      indeterminate,
      size,
      styles: stylesProp,
    };

    const styles = useUtilityStyles(ownerState);

    return (
      <html.div ref={ref} style={[styles.root, style]} {...props}>
        <html.div style={styles.checkbox}>
          <html.div
            style={styles.action}
            {...(isNative() && { onClick: handleClick })}
          >
            {!isNative() && (
              <html.input
                ref={mergeRefs(inputRef, innerInputRef)}
                // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked#values
                aria-checked={indeterminate ? "mixed" : checkedProp}
                checked={checkedProp}
                defaultChecked={defaultChecked}
                disabled={disabled}
                id={id}
                readOnly={readOnly}
                required={required}
                style={styles.input}
                type="checkbox"
                value={value}
                onBlur={handleBlur}
                onChange={handelChange}
                onFocus={handleFocus}
              />
            )}
          </html.div>
          {indeterminate ? (
            <html.svg width={12} height={2} viewBox="0 0 12 2">
              <html.line
                x1={size === "small" ? 2.2 : 1}
                y1={1}
                x2={size === "small" ? 9.8 : 11}
                y2={1}
                stroke={colors.white}
                strokeWidth={2}
                strokeLinecap="round"
              />
            </html.svg>
          ) : (
            checked && (
              <html.svg
                width={size === "small" ? 11.2 : 14}
                height={size === "small" ? 8 : 10}
                viewBox="0 0 14 10"
                fill={colors.white}
              >
                <html.path d="M11.9097 0.106383L4.71608 7.56738L2.09026 4.8156C1.9535 4.70213 1.73468 4.70213 1.62527 4.8156L0.832057 5.6383C0.722648 5.75177 0.722648 5.97872 0.832057 6.12057L4.49727 9.89362C4.63403 10.0355 4.82549 10.0355 4.96225 9.89362L13.1679 1.38298C13.2774 1.2695 13.2774 1.04255 13.1679 0.900709L12.3747 0.106383C12.2653 -0.035461 12.0465 -0.035461 11.9097 0.106383Z" />
              </html.svg>
            )
          )}
        </html.div>
        {children && (
          <html.label for={id} style={styles.label}>
            {children}
          </html.label>
        )}
      </html.div>
    );
  },
);

Checkbox.displayName = "Checkbox";
