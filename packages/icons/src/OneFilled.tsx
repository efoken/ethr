import { createIcon } from "@ethr/components";
import { html } from "@ethr/core";

export const OneFilled = createIcon(
  <html.svg width={24} height={24}>
    <html.path
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-.048-12.157v6.22q0 .547.253.828t.67.28q.937 0 .937-1.374V7.97q0-.492-.22-.773a.7.7 0 0 0-.58-.28q-.322 0-.438.123a9 9 0 0 0-.499.656q-.383.534-.882.964-.492.43-1.319.82-.555.26-.772.424-.22.164-.22.513 0 .3.22.533.225.226.512.226.601 0 2.338-1.333"
      clipRule="evenodd"
    />
  </html.svg>,
  "OneFilled",
);
