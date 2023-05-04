import OrderBook from "./src/orderBook";
import { Provider } from "react-redux";
import store from "./src/data/store";

export default function App() {
  return (
    <Provider store={store}>
      <OrderBook />
    </Provider>
  );
}
