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

const StrictSvg: React.FC<StrictReactDOMSvgProps> = ({ style, ...props }) => (
  <svg {...css.props(style)} {...props} />
);

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
  clipPath: "clipPath" as any,
  defs: "defs" as any,
  g: "g" as any,
  linearGradient: "linearGradient" as any,
  path: "path" as any,
  rect: "rect" as any,
  stop: "stop" as any,
};
