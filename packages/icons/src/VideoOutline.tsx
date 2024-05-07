import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const VideoOutline = createIcon(
  <html.svg>
    <html.path
      fillRule="evenodd"
      d="M15 8H5v8h10zm3.329 4 .671.672v-1.346zM17 10.5l2.29-2.3c.63-.63 1.71-.18 1.71.71v6.17c0 .89-1.08 1.34-1.71.71L17 13.5V17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h12c.55 0 1 .45 1 1z"
      clipRule="evenodd"
    />
    <html.path d="M18 11h2v2h-2z" />
  </html.svg>,
  "VideoOutline",
);
