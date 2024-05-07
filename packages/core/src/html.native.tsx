import { useMemo } from "react";
import {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
} from "react-native-svg";
import { html as rsdHtml } from "react-strict-dom";
import { css } from "./css";
import {
  StrictReactDOMClipPathProps,
  StrictReactDOMDefsProps,
  StrictReactDOMGProps,
  StrictReactDOMLinearGradientProps,
  StrictReactDOMPathProps,
  StrictReactDOMRectProps,
  StrictReactDOMStopProps,
  StrictReactDOMSvgProps,
} from "./types";

const StrictSvg: React.FC<StrictReactDOMSvgProps> = ({
  "data-testid": dataTestId,
  fill: fillProp,
  style,
  ...props
}) => {
  const fill = useMemo(
    () =>
      fillProp?.startsWith("var(")
        ? // eslint-disable-next-line no-underscore-dangle
          css.__customProperties[fillProp.replace(/^var\(--(.*)\)$/, "$1")]
        : fillProp,
    [],
  );

  return (
    <Svg fill={fill} testID={dataTestId} {...css.props(style)} {...props} />
  );
};

export const html: typeof rsdHtml & {
  svg: React.ComponentType<StrictReactDOMSvgProps & React.RefAttributes<any>>;
  clipPath: React.ComponentType<
    StrictReactDOMClipPathProps & React.RefAttributes<any>
  >;
  defs: React.ComponentType<StrictReactDOMDefsProps & React.RefAttributes<any>>;
  g: React.ComponentType<StrictReactDOMGProps & React.RefAttributes<any>>;
  linearGradient: React.ComponentType<
    StrictReactDOMLinearGradientProps & React.RefAttributes<any>
  >;
  path: React.ComponentType<StrictReactDOMPathProps & React.RefAttributes<any>>;
  rect: React.ComponentType<StrictReactDOMRectProps & React.RefAttributes<any>>;
  stop: React.ComponentType<StrictReactDOMStopProps & React.RefAttributes<any>>;
} = {
  ...rsdHtml,
  svg: StrictSvg,
  clipPath: ClipPath,
  defs: Defs,
  g: G,
  linearGradient: LinearGradient,
  path: Path as any,
  rect: Rect as any,
  stop: Stop as any,
};
