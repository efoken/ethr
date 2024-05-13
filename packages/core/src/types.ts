import type { Styles } from "react-strict-dom/dist/types/styles";

export interface StrictReactDOMSvgProps {
  "aria-hidden"?: boolean;
  "aria-label"?: string;
  children?: React.ReactNode;
  "data-testid"?: string;
  fill?: string;
  height?: string | number;
  role?: "img";
  style?: Styles;
  viewBox?: string;
  width?: string | number;
  xmlns?: string;
}

export interface StrictReactDOMCircleProps {
  cx?: string | number;
  cy?: string | number;
  fill?: string;
  r?: string | number;
}

export interface StrictReactDOMClipPathProps {
  children?: React.ReactNode;
  id?: string;
}

export interface StrictReactDOMDefsProps {
  children?: React.ReactNode;
}

export interface StrictReactDOMEllipseProps {
  cx?: string | number;
  cy?: string | number;
  fill?: string;
  rx?: string | number;
  ry?: string | number;
}

export interface StrictReactDOMGProps {
  children?: React.ReactNode;
  clipPath?: string;
  mask?: string;
}

export interface StrictReactDOMLineProps {
  stroke?: string;
  strokeLinecap?: "butt" | "square" | "round";
  strokeWidth?: string | number;
  x1?: string | number;
  x2?: string | number;
  y1?: string | number;
  y2?: string | number;
}

export interface StrictReactDOMLinearGradientProps {
  children?: React.ReactElement[];
  gradientUnits?: "userSpaceOnUse" | "objectBoundingBox";
  id?: string;
  x1?: string | number;
  x2?: string | number;
  y1?: string | number;
  y2?: string | number;
}

export interface StrictReactDOMMaskProps {
  children?: React.ReactNode;
  height?: string | number;
  id?: string;
  maskUnits?: "userSpaceOnUse" | "objectBoundingBox";
  style?: Styles;
  width?: string | number;
  x?: string | number;
  y?: string | number;
}

export interface StrictReactDOMPathProps {
  clipRule?: "evenodd" | "nonzero";
  d?: string;
  fill?: string;
  fillOpacity?: string | number;
  fillRule?: "evenodd" | "nonzero";
  stroke?: string;
}

export interface StrictReactDOMRectProps {
  fill?: string;
  height?: string | number;
  rx?: string | number;
  width?: string | number;
}

export interface StrictReactDOMStopProps {
  offset?: string | number;
  stopColor?: string;
  stopOpacity?: string | number;
}
