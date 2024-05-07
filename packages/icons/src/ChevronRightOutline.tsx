import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const ChevronRightOutline = createIcon(
  <html.svg width={24} height={24}>
    <html.path
      fillRule="evenodd"
      d="M8.793 18.207a1 1 0 0 1 0-1.414l4.293-4.293-4.293-4.293a1 1 0 0 1 1.414-1.414l4.293 4.293a2 2 0 0 1 0 2.828l-4.293 4.293a1 1 0 0 1-1.414 0"
      clipRule="evenodd"
    />
  </html.svg>,
  "ChevronRightOutline",
);
