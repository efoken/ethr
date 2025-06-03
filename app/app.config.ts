import type { ExpoConfig } from "@expo/config-types";

const config: ExpoConfig = {
  name: "ethr",
  slug: "ethr",
  version: "1.0.0",
  orientation: "default",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.ethr.app",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#fff",
    },
    package: "com.ethr.app",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  newArchEnabled: true,
  plugins: [
    [
      "expo-dev-launcher",
      {
        launchMode: "most-recent",
      },
    ],
  ],
};

export default config;
