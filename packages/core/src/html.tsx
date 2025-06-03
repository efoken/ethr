import { html as rsdHtml } from "react-strict-dom";
import { svg } from "react-strict-dom-svg";

export const html: typeof rsdHtml & typeof svg = {
  ...rsdHtml,
  ...svg,
};
