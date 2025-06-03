import { html } from "@ethr/core";
import { Component, createContext } from "react";
import type {
  PortalConsumerProps,
  PortalProviderProps,
} from "./PortalContext.types";
import { PortalManager } from "./PortalManager";

interface PortalMethods {
  mount: (children: React.ReactNode) => number;
  unmount: (key: number) => void;
  update: (key: number, children: React.ReactNode) => void;
}

const PortalContext = createContext<PortalMethods>(undefined as any);

type PortalProviderAction =
  | { type: "mount"; key: number; children: React.ReactNode }
  | { type: "unmount"; key: number }
  | { type: "update"; key: number; children: React.ReactNode };

export class PortalProvider extends Component<PortalProviderProps> {
  private nextKey = 0;

  private queue: PortalProviderAction[] = [];

  private manager?: PortalManager | null;

  componentDidMount() {
    while (this.queue.length > 0 && this.manager) {
      const action = this.queue.pop();
      if (action) {
        switch (action.type) {
          case "mount": {
            this.manager.mount(action.key, action.children);
            break;
          }
          case "unmount": {
            this.manager.unmount(action.key);
            break;
          }
          case "update": {
            this.manager.update(action.key, action.children);
            break;
          }
          // no default
        }
      }
    }
  }

  private setManager = (manager?: PortalManager | null) => {
    this.manager = manager;
  };

  private mount = (children: React.ReactNode) => {
    this.nextKey += 1;
    const key = this.nextKey;

    if (this.manager) {
      this.manager.mount(key, children);
    } else {
      this.queue.push({ type: "mount", key, children });
    }

    return key;
  };

  private unmount = (key: number) => {
    if (this.manager) {
      this.manager.unmount(key);
    } else {
      this.queue.push({ type: "unmount", key });
    }
  };

  private update = (key: number, children: React.ReactNode) => {
    if (this.manager) {
      this.manager.update(key, children);
    } else {
      const action: PortalProviderAction = { type: "mount", key, children };
      const index = this.queue.findIndex(
        (a) => a.type === "mount" || (a.type === "update" && a.key === key),
      );
      if (index === -1) {
        this.queue.push(action);
      } else {
        this.queue[index] = action;
      }
    }
  };

  render() {
    const { children } = this.props;

    return (
      <PortalContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          mount: this.mount,
          unmount: this.unmount,
          update: this.update,
        }}
      >
        <html.div
          // @ts-expect-error
          style={{ flex: 1 }}
        >
          {children}
        </html.div>
        <PortalManager ref={this.setManager} />
      </PortalContext.Provider>
    );
  }
}

export class PortalConsumer extends Component<PortalConsumerProps> {
  static contextType = PortalContext;

  context!: PortalMethods;

  private key: any;

  async componentDidMount() {
    const { children } = this.props;
    const { mount } = this.context;

    this.checkManager();

    // Delay updating to prevent React from going to infinite loop
    await Promise.resolve();

    this.key = mount(children);
  }

  componentDidUpdate() {
    const { children } = this.props;
    const { update } = this.context;

    this.checkManager();

    update(this.key, children);
  }

  componentWillUnmount() {
    const { unmount } = this.context;

    this.checkManager();

    unmount(this.key);
  }

  private checkManager() {
    if (this.context == null) {
      throw new Error(
        "Ethr: `context` is undefined. Seems you forgot to wrap your app within <PortalProvider />",
      );
    }
  }

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  render() {
    return null;
  }
}
