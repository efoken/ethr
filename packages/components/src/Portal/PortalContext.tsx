// eslint-disable-next-line max-classes-per-file
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
  render() {
    return null;
  }
}
