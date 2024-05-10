import { html } from "@ethr/core";
import { PureComponent } from "react";

export interface PortalManagerState {
  portals: [key: number, children: React.ReactNode][];
}

export class PortalManager extends PureComponent<{}, PortalManagerState> {
  readonly state: PortalManagerState = {
    portals: [],
  };

  mount = (key: number, children: React.ReactNode) => {
    this.setState((state) => ({
      portals: [...state.portals, [key, children]],
    }));
  };

  unmount = (key: number) => {
    this.setState((state) => ({
      portals: state.portals.filter((item) => item[0] !== key),
    }));
  };

  update = (key: number, children: React.ReactNode) => {
    this.setState((state) => ({
      portals: state.portals.map((item) => {
        if (item[0] === key) {
          return [item[0], children];
        }
        return item;
      }),
    }));
  };

  render() {
    const { portals } = this.state;

    return portals.map(([key, children]) => (
      <html.div
        key={key}
        // @ts-expect-error
        style={{
          inset: 0,
          position: "absolute",
        }}
      >
        {children}
      </html.div>
    ));
  }
}
