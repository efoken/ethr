import { memoize } from "@ethr/utils";
import { forwardRef } from "react";
import {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop,
  Svg,
} from "react-native-svg";
import { html as rsdHtml } from "react-strict-dom";
import { css } from "./css";
import type {
  StrictReactDOMCircleProps,
  StrictReactDOMClipPathProps,
  StrictReactDOMDefsProps,
  StrictReactDOMEllipseProps,
  StrictReactDOMGProps,
  StrictReactDOMLineProps,
  StrictReactDOMLinearGradientProps,
  StrictReactDOMMaskProps,
  StrictReactDOMPathProps,
  StrictReactDOMRectProps,
  StrictReactDOMStopProps,
  StrictReactDOMSvgProps,
} from "./types";

const getCustomProperty = memoize((value?: string) =>
  value?.startsWith("var(")
    ? // eslint-disable-next-line no-underscore-dangle
      css.__customProperties[value.replace(/^var\(--(.*)\)$/, "$1")]
    : value,
);

const StrictSvg = forwardRef<any, StrictReactDOMSvgProps>(
  ({ "data-testid": testID, fill, style, ...props }, ref) => (
    <Svg
      ref={ref}
      fill={getCustomProperty(fill)}
      testID={testID}
      {...css.props(style)}
      {...props}
    />
  ),
);

const StrictCircle = forwardRef<any, StrictReactDOMCircleProps>(
  ({ fill, ...props }, ref) => (
    <Circle ref={ref} fill={getCustomProperty(fill)} {...props} />
  ),
);

const StrictEllipse = forwardRef<any, StrictReactDOMEllipseProps>(
  ({ fill, ...props }, ref) => (
    <Ellipse ref={ref} fill={getCustomProperty(fill)} {...props} />
  ),
);

const StrictLine = forwardRef<any, StrictReactDOMLineProps>(
  ({ stroke, ...props }, ref) => (
    <Line ref={ref} stroke={getCustomProperty(stroke)} {...props} />
  ),
);

const StrictPath = forwardRef<any, StrictReactDOMPathProps>(
  ({ fill, stroke, ...props }, ref) => (
    <Path
      ref={ref}
      fill={getCustomProperty(fill)}
      stroke={getCustomProperty(stroke)}
      {...props}
    />
  ),
);

const StrictRect = forwardRef<any, StrictReactDOMRectProps>(
  ({ fill, ...props }, ref) => (
    <Rect ref={ref} fill={getCustomProperty(fill)} {...props} />
  ),
);

const StrictStop = forwardRef<any, StrictReactDOMStopProps>(
  ({ stopColor, ...props }, ref) => (
    <Stop ref={ref} stopColor={getCustomProperty(stopColor)} {...props} />
  ),
);

export const html: typeof rsdHtml & {
  svg: React.ComponentType<StrictReactDOMSvgProps & React.RefAttributes<any>>;
  circle: React.ComponentType<
    StrictReactDOMCircleProps & React.RefAttributes<any>
  >;
  clipPath: React.ComponentType<
    StrictReactDOMClipPathProps & React.RefAttributes<any>
  >;
  defs: React.ComponentType<StrictReactDOMDefsProps & React.RefAttributes<any>>;
  ellipse: React.ComponentType<
    StrictReactDOMEllipseProps & React.RefAttributes<any>
  >;
  g: React.ComponentType<StrictReactDOMGProps & React.RefAttributes<any>>;
  line: React.ComponentType<StrictReactDOMLineProps & React.RefAttributes<any>>;
  linearGradient: React.ComponentType<
    StrictReactDOMLinearGradientProps & React.RefAttributes<any>
  >;
  mask: React.ComponentType<StrictReactDOMMaskProps & React.RefAttributes<any>>;
  path: React.ComponentType<StrictReactDOMPathProps & React.RefAttributes<any>>;
  rect: React.ComponentType<StrictReactDOMRectProps & React.RefAttributes<any>>;
  stop: React.ComponentType<StrictReactDOMStopProps & React.RefAttributes<any>>;
} = {
  ...rsdHtml,
  svg: StrictSvg,
  circle: StrictCircle,
  clipPath: ClipPath,
  defs: Defs,
  ellipse: StrictEllipse,
  g: G,
  line: StrictLine,
  linearGradient: LinearGradient,
  mask: Mask,
  path: StrictPath,
  rect: StrictRect,
  stop: StrictStop,
};
