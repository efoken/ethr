import { createCryptocurrency } from "@ethr/components";
import { html } from "@ethr/core";

export const Waves = createCryptocurrency(
  <html.svg viewBox="0 0 24 24">
    <html.path d="M0.000244141 12L12.0001 0.000142699L24 12L12.0001 23.9999L0.000244141 12Z" />
  </html.svg>,
  "#0055fe",
  "Waves",
);
