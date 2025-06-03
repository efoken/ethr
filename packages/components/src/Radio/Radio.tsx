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
import { radioStyles } from "./Radio.stylex";
import type { RadioOwnerState, RadioProps } from "./Radio.types";

function useUtilityStyles({
  checked,
  disabled,
  focusVisible,
  size,
  styles,
}: RadioOwnerState) {
  return {
    root: [
      radioStyles.root,
      radioStyles[`size${capitalize(size)}`],
      disabled && radioStyles.disabled,
      styles?.root,
    ],
    radio: [
      radioStyles.radio,
      radioStyles[`radio${capitalize(size)}`],
      disabled && radioStyles.radioDisabled,
      checked && [
        radioStyles.radioChecked,
        disabled && radioStyles.radioCheckedDisabled,
      ],
      styles?.radio,
    ],
    action: [
      radioStyles.action,
      focusVisible && radioStyles.actionFocusVisible,
      styles?.action,
    ],
    input: [radioStyles.input, styles?.input],
    label: [radioStyles.label, styles?.label],
  };
}

export const Radio = forwardRef(
  (inProps: RadioProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      checked: checkedProp,
      children,
      defaultChecked = false,
      disabled = false,
      id: idProp,
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
      name: "Radio",
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
      size,
      styles: stylesProp,
    };

    const styles = useUtilityStyles(ownerState);

    return (
      <html.div ref={ref} style={[styles.root, style]} {...props}>
        <html.div style={styles.radio}>
          <html.div
            style={styles.action}
            {...(isNative() && { onClick: handleClick })}
          >
            {!isNative() && (
              <html.input
                ref={mergeRefs(inputRef, innerInputRef)}
                aria-checked={checkedProp}
                checked={checkedProp}
                defaultChecked={defaultChecked}
                disabled={disabled}
                id={id}
                readOnly={readOnly}
                required={required}
                style={styles.input}
                type="radio"
                value={value}
                onBlur={handleBlur}
                onChange={handelChange}
                onFocus={handleFocus}
              />
            )}
          </html.div>
          {checked && (
            <html.svg
              width={size === "small" ? 8 : 10}
              height={size === "small" ? 8 : 10}
              viewBox="0 0 10 10"
              fill={colors.white}
            >
              <html.circle cx={5} cy={5} r={5} />
            </html.svg>
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

Radio.displayName = "Radio";
