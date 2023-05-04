import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBids, setAsks } from "./orderBookSlice";

export default (prec) => {
  const [connected, setConnected] = useState(false);
  const dispatch = useDispatch();
  const wsRef = React.useRef();

  React.useEffect(() => {
    wsRef.current = openSocket();
    return () => bitfinexWs.close();
  }, [prec]);

  const closeSocket = () => {
    ws.current.close();
  };
  const openSocket = () => {
    const bitfinexWs = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    bitfinexWs.onopen = () => {
      let msg = JSON.stringify({
        event: "subscribe",
        channel: "book",
        symbol: "tBTCUSD",
        prec: prec,
      });
      bitfinexWs.send(msg);
      setConnected(true);
    };

    bitfinexWs.onmessage = (e) => {
      console.log("onMessage", e);
      let data = JSON.parse(e.data);
      const asks = [];
      const bids = [];
      if (data.event || data[1] === "hb") return;
      data[1].map((trade) => {
        const price = trade[0];
        const count = trade[1];
        const amount = trade[2];
        if (amount > 0) {
          //update bids/right/sell
          bids.push({ price, count, amount });
        }
        if (amount < 0) {
          asks.push({ price, count, amount });
        }
      });
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
    return bitfinexWs;
  };

  return { openSocket, closeSocket };
};
