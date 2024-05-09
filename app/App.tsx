import { Button, Popover, PortalProvider, Scorecard } from "@ethr/components";
import { css, html } from "@ethr/core";
import {
  Avalanche,
  BinanceUsd,
  Bitcoin,
  Bnb,
  Cardano,
  Chainlink,
  Dai,
  Dogecoin,
  Ether,
  NearProtocol,
  Polkadot,
  Polygon,
  ShibaInu,
  Solana,
  Terra,
  Tether,
  Tron,
  UsdCoin,
  Waves,
  Xrp,
} from "@ethr/cryptocurrencies";
import { TaxiFilled } from "@ethr/icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const styles = css.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 16,
  },
  card: {
    width: "100%",
  },
});

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <PortalProvider>
      <html.div style={styles.container}>
        <html.p style={styles.text}>
          Open up App.js to start working on your app!
        </html.p>
        <Popover
          showArrow
          anchor={
            <Button
              prefix={<TaxiFilled />}
              variant="primary"
              onClick={() => setOpen(!open)}
            >
              Test
            </Button>
          }
          open={open}
        >
          <Dai />
        </Popover>
        <html.div style={styles.grid}>
          <Bitcoin />
          <Ether />
          <Tether />
          <Bnb />
          <UsdCoin />
          <Solana />
          <Xrp />
          <Cardano />
          <Terra />
          <Avalanche />
          <Polkadot />
          <Dogecoin />
          <BinanceUsd />
          <Chainlink />
          <Polygon />
          <NearProtocol />
          <Tron />
          <Waves />
          <ShibaInu />
          <Dai />
        </html.div>
        <Scorecard
          count="$198,298"
          label="Label"
          percentage={9.3}
          percentageLabel="Since last week"
          variant="elevation"
          visual={<Cardano />}
          style={styles.card}
        />
        <StatusBar
          // eslint-disable-next-line react/style-prop-object
          style="auto"
        />
      </html.div>
    </PortalProvider>
  );
}
