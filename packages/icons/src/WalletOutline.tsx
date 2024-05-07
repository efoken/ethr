import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const WalletOutline = createIcon(
  <html.svg>
    <html.path d="M21 7.28V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72M20 9v6h-7V9zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2z" />
    <html.path d="M16 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </html.svg>,
  "WalletOutline",
);
