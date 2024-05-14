import { forwardRef } from "react";
import { html as rsdHtml } from "react-strict-dom";
import { css } from "./css";
import type {
  StrictReactDOMCircleProps,
  StrictReactDOMClipPathProps,
  StrictReactDOMDefsProps,
  StrictReactDOMEllipseProps,
  StrictReactDOMGProps,
  StrictReactDOMImageProps,
  StrictReactDOMLineProps,
  StrictReactDOMLinearGradientProps,
  StrictReactDOMMaskProps,
  StrictReactDOMPathProps,
  StrictReactDOMPatternProps,
  StrictReactDOMRectProps,
  StrictReactDOMStopProps,
  StrictReactDOMSvgProps,
  StrictReactDOMUseProps,
} from "./types";

const StrictSvg = forwardRef<any, StrictReactDOMSvgProps>(
  ({ style, ...props }, ref) => (
    <svg ref={ref} {...css.props(style)} {...props} />
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
  image: React.ComponentType<
    StrictReactDOMImageProps & React.RefAttributes<any>
  >;
  line: React.ComponentType<StrictReactDOMLineProps & React.RefAttributes<any>>;
  linearGradient: React.ComponentType<
    StrictReactDOMLinearGradientProps & React.RefAttributes<any>
  >;
  mask: React.ComponentType<StrictReactDOMMaskProps & React.RefAttributes<any>>;
  path: React.ComponentType<StrictReactDOMPathProps & React.RefAttributes<any>>;
  pattern: React.ComponentType<
    StrictReactDOMPatternProps & React.RefAttributes<any>
  >;
  rect: React.ComponentType<StrictReactDOMRectProps & React.RefAttributes<any>>;
  stop: React.ComponentType<StrictReactDOMStopProps & React.RefAttributes<any>>;
  use: React.ComponentType<StrictReactDOMUseProps & React.RefAttributes<any>>;
} = {
  ...rsdHtml,
  svg: StrictSvg,
  circle: "circle" as any,
  clipPath: "clipPath" as any,
  defs: "defs" as any,
  ellipse: "ellipse" as any,
  g: "g" as any,
  image: "image" as any,
  line: "line" as any,
  linearGradient: "linearGradient" as any,
  mask: "mask" as any,
  path: "path" as any,
  pattern: "pattern" as any,
  rect: "rect" as any,
  stop: "stop" as any,
  use: "use" as any,
};
