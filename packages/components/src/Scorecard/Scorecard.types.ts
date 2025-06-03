import type { html, Styles } from "@ethr/core";

export interface ScorecardProps
  extends Omit<React.ComponentProps<typeof html.div>, "children"> {
  count?: string;
  label?: string;
  /** @default "vertical" */
  layout?: "vertical" | "horizontal";
  percentage?: number;
  percentageLabel?: string;
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: Styles;
    text?: Styles;
    score?: Styles;
    label?: Styles;
    count?: Styles;
    percentage?: Styles;
    percentageLabel?: Styles;
  };
  /** @default "none" */
  variant?: "none" | "stroke" | "elevation";
  visual?: React.ReactElement;
  /** @default "start" */
  visualPosition?: "start" | "end";
}

export type ScorecardOwnerState = Required<
  Pick<ScorecardProps, "layout" | "variant" | "visualPosition">
> &
  Pick<ScorecardProps, "styles">;

export type ScorecardStyleKey = keyof NonNullable<ScorecardProps["styles"]>;
