import { html } from "@ethr/core";
import { capitalize } from "@ethr/utils";
import { forwardRef, useCallback, useRef, useState } from "react";
import { listItemStyles } from "./ListItem.stylex";
import type { ListItemOwnerState, ListItemProps } from "./ListItem.types";

function useUtilityStyles({ size, styles, variant }: ListItemOwnerState) {
  return {
    root: [
      listItemStyles.root,
      listItemStyles[`size${capitalize(size)}`],
      listItemStyles[`variant${capitalize(variant)}`],
      styles?.root,
    ],
    content: [listItemStyles.content, styles?.content],
    text: listItemStyles.text,
    primary: [
      listItemStyles.primary,
      listItemStyles[`primarySize${capitalize(size)}`],
      styles?.primary,
    ],
    secondary: [listItemStyles.secondary, styles?.secondary],
    divider: [
      listItemStyles.divider,
      (variant === "divider" || variant === "fullDivider") &&
        listItemStyles[`dividerVariant${capitalize(variant)}`],
    ],
    border: [
      listItemStyles.border,
      (variant === "border" || variant === "dashedBorder") &&
        listItemStyles[`borderVariant${capitalize(variant)}`],
    ],
  };
}

function cursorPosition(event: any) {
  if (event instanceof TouchEvent && event?.touches?.[0]?.clientX) {
    return event.touches[0].clientX;
  }
  if (event instanceof MouseEvent && event?.clientX) {
    return event.clientX;
  }
  if (event?.nativeEvent?.touches?.[0]?.clientX) {
    return event.nativeEvent.touches[0].clientX as number;
  }
  return event.nativeEvent.clientX as number;
}

const rtl = false;

export const ListItem = forwardRef(
  (inProps: ListItemProps, ref: React.ForwardedRef<HTMLLIElement>) => {
    const {
      label,
      prefix,
      primaryText,
      secondaryText,
      size = "medium",
      style,
      styles: stylesProp,
      suffix,
      variant = "none",
      ...props
    } = inProps;

    const ownerState = {
      size,
      styles: stylesProp,
      variant,
    };

    const styles = useUtilityStyles(ownerState);

    const [touching, setTouching] = useState(false);
    const [translate, setTranslate] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const startTouchPosition = useRef(0);
    const initTranslate = useRef(0);

    const onStart = useCallback(
      (event: React.PointerEvent) => {
        if (touching) {
          return;
        }
        startTouchPosition.current = cursorPosition(event);
        initTranslate.current = translate;
        setTouching(true);
      },
      [disabled, touching, translate],
    );

    const onMove = useCallback(
      (event: TouchEvent | MouseEvent) => {
        if (!touching) {
          return;
        }
        if (
          !rtl &&
          cursorPosition(event) >
            startTouchPosition.current - initTranslate.current
        ) {
          return setTranslate(0);
        }
        if (
          rtl &&
          cursorPosition(event) <
            startTouchPosition.current - initTranslate.current
        ) {
          return setTranslate(0);
        }
        setTranslate(
          cursorPosition(event) -
            startTouchPosition.current +
            initTranslate.current,
        );
      },
      [touching],
    );

    return (
      <html.li ref={ref} style={[styles.root, style]} {...props}>
        <html.div style={styles.content} onPointerDown={onStart}>
          {prefix}
          <html.div style={styles.text}>
            {size === "medium" ? (
              <>
                <html.div style={styles.primary}>{primaryText}</html.div>
                <html.div style={styles.secondary}>{secondaryText}</html.div>
              </>
            ) : (
              <html.div style={styles.primary}>{primaryText}</html.div>
            )}
          </html.div>
          {label && <html.div>{label}</html.div>}
          {suffix}
        </html.div>
        {(variant === "divider" || variant === "fullDivider") && (
          <html.div style={styles.divider} />
        )}
        {(variant === "border" || variant === "dashedBorder") && (
          <html.div style={styles.border} />
        )}
      </html.li>
    );
  },
);

ListItem.displayName = "ListItem";
