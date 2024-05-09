export interface StrictReactDOMSvgProps {
  "aria-hidden"?: boolean;
  "aria-label"?: string;
  children?: React.ReactNode;
  "data-testid"?: string;
  fill?: string;
  height?: string | number;
  role?: "img";
  style?: any;
  viewBox?: string;
  width?: string | number;
  xmlns?: string;
}

export interface StrictReactDOMClipPathProps {
  children?: React.ReactNode;
  id?: string;
}

export interface StrictReactDOMDefsProps {
  children?: React.ReactNode;
}

export interface StrictReactDOMGProps {
  children?: React.ReactNode;
  clipPath?: string;
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
