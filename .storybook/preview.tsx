import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
