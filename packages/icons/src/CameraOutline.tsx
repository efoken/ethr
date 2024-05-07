import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const CameraOutline = createIcon(
  <html.svg>
    <html.path
      fillRule="evenodd"
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      clipRule="evenodd"
    />
    <html.path
      fillRule="evenodd"
      d="m15.951 6-1.837-2H9.883l-.004.001-.008.005-.003.003L8.053 6H4v12h16V6zM8.4 2.65c.38-.41.92-.65 1.48-.65h4.24c.56 0 1.1.24 1.47.65L16.83 4H20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.17z"
      clipRule="evenodd"
    />
  </html.svg>,
  "CameraOutline",
);
