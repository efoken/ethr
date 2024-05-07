import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const TransactionOutline = createIcon(
  <html.svg>
    <html.path d="M18.707 5.293a1 1 0 1 0-1.414 1.414L18.586 8H11a1 1 0 1 0 0 2h7.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3A1 1 0 0 0 22 9.01" />
    <html.path d="M21.924 8.617a1 1 0 0 0-.217-.324l-3-3M21.924 8.617a1 1 0 0 1 .076.374zM5.293 19.707a1 1 0 0 0 1.414-1.414L5.414 17H13a1 1 0 1 0 0-2H5.414l1.293-1.293a1 1 0 1 0-1.414-1.414l-3 3-.007.006a1 1 0 0 0 .007 1.408z" />
  </html.svg>,
  "TransactionOutline",
);
