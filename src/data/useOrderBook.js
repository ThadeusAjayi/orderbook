import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBids, setAsks } from "./orderBookSlice";

export default (prec) => {
  const { asks, bids } = useSelector((storeState) => storeState.orderBook);
  const [connected, setConnected] = useState(false);

  const isConnected = React.useMemo(() => {
    return connected;
  }, [connected]);

  const dispatch = useDispatch();
  let bitfinexWs = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  React.useEffect(() => {
    // if (!bitfinexWs) return;
    bitfinexWs.onopen = () => {
      let msg = JSON.stringify({
        event: "subscribe",
        channel: "book",
        pair: "tBTCUSD",
        prec: prec,
        len: 25,
      });
      bitfinexWs.send(msg);
      setConnected(true);
    };

    bitfinexWs.onmessage = (e) => {
      let data = JSON.parse(e.data);
      const asks = [];
      const bids = [];
      if (data.event || data[1] === "hb") return;
      const askBid = data[1];
      const price = askBid[0];
      const count = askBid[1];
      const amount = askBid[2];
      if (count > 0) {
        //update price
      }
      if (amount > 0) {
        //update bids/right/sell
        bids.push({ price, count, amount });
      }
      if (amount < 0) {
        asks.push({ price, count, amount });
      }
      asks.sort((a, b) => a.amount > b.amount);
      bids.sort((a, b) => a.amount > b.amount);

      dispatch(setBids(bids));
      dispatch(setAsks(asks));
    };

    bitfinexWs.onerror = (e) => {
      // an error occurred
      console.log("error", e.message);
    };

    bitfinexWs.onclose = (e) => {
      // connection closed
      console.log("closed", e.code, e.reason);
    };

    return () => bitfinexWs.close();
  }, []);

  const closeSocket = () => {
    bitfinexWs.close();
    bitfinexWs = null;
  };
  const openSocket = () =>
    (bitfinexWs = new WebSocket("wss://api-pub.bitfinex.com/ws/2"));

  return { openSocket, closeSocket };
};
