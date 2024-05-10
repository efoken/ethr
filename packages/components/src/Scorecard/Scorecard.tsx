import { html } from "@ethr/core";
import { capitalize } from "@ethr/utils";
import { forwardRef } from "react";
import type { StrictHTMLElement } from "react-strict-dom";
import { scorecardStyles } from "./Scorecard.stylex";
import type { ScorecardOwnerState, ScorecardProps } from "./Scorecard.types";

function useUtilityStyles({
  layout,
  variant,
  visualPosition,
}: ScorecardOwnerState) {
  return {
    root: [
      scorecardStyles.root,
      scorecardStyles[`variant${capitalize(variant)}`],
      scorecardStyles[`layout${capitalize(layout)}`](visualPosition),
    ],
    text: [scorecardStyles.text],
    score: [scorecardStyles.score],
    label: [scorecardStyles.label],
    count: [scorecardStyles.count],
    percentage: [scorecardStyles.percentage],
    percentageLabel: [scorecardStyles.percentageLabel],
  };
}

export const Scorecard = forwardRef(
  (inProps: ScorecardProps, ref: React.ForwardedRef<StrictHTMLElement>) => {
    const {
      count,
      label,
      layout = "vertical",
      percentage,
      percentageLabel,
      style,
      variant = "none",
      visual,
      visualPosition = "start",
      ...rest
    } = inProps;

    const ownerState = {
      layout,
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
