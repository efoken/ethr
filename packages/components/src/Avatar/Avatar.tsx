import { html } from "@ethr/core";
import { capitalize } from "@ethr/utils";
import { forwardRef } from "react";
import type { StrictHTMLElement } from "react-strict-dom";
import { colors } from "../globals.stylex";
import { avatarStyles } from "./Avatar.stylex";
import type { AvatarOwnerState, AvatarProps } from "./Avatar.types";
import { useLoaded } from "./useLoaded";

function useUtilityStyles({ shape, size, styles, variant }: AvatarOwnerState) {
  return {
    root: [
      avatarStyles.root,
      avatarStyles[`size${capitalize(size)}`],
      avatarStyles[`variant${capitalize(variant)}`],
      (variant === "alphabet" || variant === "initials") &&
        avatarStyles[`variant${capitalize(variant)}${capitalize(size)}`],
      avatarStyles[`shape${capitalize(shape)}`],
      styles?.root,
    ],
    image: [avatarStyles.image, styles?.image],
    text: [avatarStyles.text, styles?.text],
    placeholder: [styles?.placeholder],
  };
}

export const Avatar = forwardRef(
  (inProps: AvatarProps, ref: React.ForwardedRef<StrictHTMLElement>) => {
    const {
      alt,
      children,
      shape = "circle",
      size = "medium",
      src,
      srcSet,
      style,
      styles: stylesProp,
      variant: variantProp = "image",
      ...props
    } = inProps;

    const { loaded, handleError, handleLoad } = useLoaded({ src, srcSet });
    const hasImg = !!src || !!srcSet;
    const hasImgNotFailing = hasImg && loaded !== "error";

    const variant =
      variantProp === "image"
        ? hasImgNotFailing
          ? variantProp
          : !!children || children === 0
            ? "initials"
            : hasImg && !!alt
              ? "alphabet"
              : "placeholder"
        : variantProp;

    const ownerState = {
      shape,
      size,
      styles: stylesProp,
      variant,
    };

    const styles = useUtilityStyles(ownerState);

    const placeholder = (
      <html.svg
        width="100%"
        height="100%"
        viewBox="0 0 56 56"
        style={styles.placeholder}
      >
        <html.rect width={56} height={56} fill={colors.neutral10} />
        <html.ellipse cx={28} cy={53} rx={32} ry={16} fill={colors.neutral60} />
        <html.ellipse
          cx={27.9987}
          cy={23.3333}
          rx={9.333_33}
          ry={9.333_33}
          fill={colors.neutral60}
        />
      </html.svg>
    );

    const image = hasImgNotFailing ? (
      <html.img
        alt={alt}
        height={56}
        src={src}
        srcSet={srcSet}
        style={styles.image}
        width={56}
        onError={handleError}
        onLoad={handleLoad}
      />
    ) : !!children || children === 0 ? (
      children
    ) : hasImg && !!alt ? (
      <html.span style={styles.text}>{alt[0]}</html.span>
    ) : (
      placeholder
    );

    return (
      <html.div ref={ref} style={[styles.root, style]} {...props}>
        {variant === "image" ? (
          image
        ) : variant === "alphabet" || variant === "initials" ? (
          <html.span style={styles.text}>{children}</html.span>
        ) : (
          placeholder
        )}
      </html.div>
    );
  },
);

Avatar.displayName = "Avatar";
