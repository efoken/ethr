"use client";

import { Component } from "react";
import type {
  PortalConsumerProps,
  PortalProviderProps,
} from "./PortalContext.types";

export class PortalProvider extends Component<PortalProviderProps> {
  render() {
    const { children } = this.props;
    return children;
  }
}

// eslint-disable-next-line react/prefer-stateless-function
export class PortalConsumer extends Component<PortalConsumerProps> {
  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  render() {
    return null;
  }
}
