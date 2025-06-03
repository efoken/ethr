import { html } from "@ethr/core";
import { capitalize } from "@ethr/utils";
import { forwardRef } from "react";
import { scorecardStyles } from "./Scorecard.stylex";
import type { ScorecardOwnerState, ScorecardProps } from "./Scorecard.types";

function useUtilityStyles({
  layout,
  styles,
  variant,
  visualPosition,
}: ScorecardOwnerState) {
  return {
    root: [
      scorecardStyles.root,
      scorecardStyles[`variant${capitalize(variant)}`],
      scorecardStyles[`layout${capitalize(layout)}`](visualPosition),
      styles?.root,
    ],
    text: [scorecardStyles.text, styles?.text],
    score: [scorecardStyles.score, styles?.score],
    label: [scorecardStyles.label, styles?.label],
    count: [scorecardStyles.count, styles?.count],
    percentage: [scorecardStyles.percentage, styles?.percentage],
    percentageLabel: [scorecardStyles.percentageLabel, styles?.percentageLabel],
  };
}

export const Scorecard = forwardRef(
  (inProps: ScorecardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      count,
      label,
      layout = "vertical",
      percentage,
      percentageLabel,
      style,
      styles: stylesProp,
      variant = "none",
      visual,
      visualPosition = "start",
      ...rest
    } = inProps;

    const ownerState = {
      layout,
      styles: stylesProp,
      variant,
      visualPosition,
    };

    const styles = useUtilityStyles(ownerState);

    return (
      <html.div ref={ref} style={[styles.root, style]} {...rest}>
        {visual}
        <html.div style={styles.text}>
          <html.div style={styles.score}>
            <html.p style={styles.label}>{label}</html.p>
            <html.p style={styles.count}>{count}</html.p>
          </html.div>
          <html.div style={styles.percentage}>
            <html.p style={styles.percentageLabel}>{percentageLabel}</html.p>
          </html.div>
        </html.div>
      </html.div>
    );
  },
);

Scorecard.displayName = "Scorecard";
