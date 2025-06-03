"use client";

import { html } from "@ethr/core";
import {
  isNative,
  mergeRefs,
  useControlled,
  useFocusVisible,
  useId,
} from "@ethr/utils";
import { forwardRef, useEffect, useRef, useState } from "react";
import { switchStyles } from "./Switch.stylex";
import type { SwitchOwnerState, SwitchProps } from "./Switch.types";

function useUtilityStyles({
  checked,
  disabled,
  focusVisible,
  styles,
}: SwitchOwnerState) {
  return {
    root: [switchStyles.root, disabled && switchStyles.disabled, styles?.root],
    track: [
      switchStyles.track,
      checked && [
        switchStyles.trackChecked,
        disabled && switchStyles.trackCheckedDisabled,
      ],
      styles?.track,
    ],
    thumb: [
      switchStyles.thumb,
      disabled && switchStyles.thumbDisabled,
      checked && switchStyles.thumbChecked,
      styles?.thumb,
    ],
    action: [
      switchStyles.action,
      focusVisible && switchStyles.actionFocusVisible,
      styles?.action,
    ],
    input: [switchStyles.input, styles?.input],
    label: [switchStyles.label, styles?.label],
  };
}

export const Switch = forwardRef(
  (inProps: SwitchProps, ref: React.ForwardedRef<HTMLDivElement>) => {
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
      styles: stylesProp,
    };

    const styles = useUtilityStyles(ownerState);

    return (
      <html.div ref={ref} style={[styles.root, style]} {...props}>
        <html.div style={styles.track}>
          <html.div style={styles.thumb} />
        </html.div>
        <html.div
          style={styles.action}
          {...(isNative() && { onClick: handleClick })}
        >
          {!isNative() && (
            <html.input
              ref={mergeRefs(inputRef, innerInputRef)}
              checked={checkedProp}
              defaultChecked={defaultChecked}
              disabled={disabled}
              id={id}
              readOnly={readOnly}
              required={required}
              role="switch"
              style={styles.input}
              type="checkbox"
              value={value}
              onBlur={handleBlur}
              onChange={handelChange}
              onFocus={handleFocus}
            />
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

Switch.displayName = "Switch";
