import type { html } from "@ethr/core";

export interface ScorecardProps
  extends Omit<React.ComponentProps<typeof html.div>, "children"> {
  count?: string;
  label?: string;
  /** @default "vertical" */
  layout?: "vertical" | "horizontal";
  percentage?: number;
  percentageLabel?: string;
  /** @default "none" */
  variant?: "none" | "stroke" | "elevation";
  visual?: React.ReactElement;
  /** @default "start" */
  visualPosition?: "start" | "end";
}

export type ScorecardOwnerState = Required<
  Pick<ScorecardProps, "layout" | "variant" | "visualPosition">
>;
