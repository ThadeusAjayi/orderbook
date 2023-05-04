import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import useOrderBook from "./data/useOrderBook";
import OrderRow from "./components/orderRow";
import { Button } from "react-native";
import colors from "./assets/colors";
import HeaderTitle from "./components/headerTitle";

const Precision = ["P0", "P1", "P2", "P3", "P4"];
export default () => {
  const [prec, setPrec] = React.useState(Precision[0]);
  const { openSocket, closeSocket } = useOrderBook(prec);

  const precisionFunction = (dir) => {
    if (dir === "+") {
      setPrec(Precision[Precision.indexOf(prec) + 1]);
    } else {
      setPrec(Precision[Precision.indexOf(prec) - 1]);
    }
  };

  return (
    <View style={styles.orderBook}>
      <View style={styles.header}>
        <Text style={styles.headText}>ORDER BOOK</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => precisionFunction("-")}
            disabled={Precision.indexOf(prec) == 0}
            style={[
              styles.precisionBtn,
              Precision.indexOf(prec) == 0 && styles.disablePrecisionButtons,
            ]}
          >
            <Text style={styles.precsiontText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => precisionFunction("+")}
            disabled={Precision.indexOf(prec) == Precision.length - 1}
            style={[
              styles.precisionBtn,
              Precision.indexOf(prec) == Precision.length - 1 &&
                styles.disablePrecisionButtons,
            ]}
          >
            <Text style={styles.precsiontText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <HeaderTitle />
      <OrderRow />
      <View style={styles.buttonRow}>
        <Button
          color={colors.green}
          title="Connect"
          onPress={() => openSocket()}
        />
        <Button
          color={colors.red}
          title="Disconnect"
          onPress={() => closeSocket()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderBook: {
    backgroundColor: colors.background,
    flex: 1,
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textWhite,
  },
  headerRight: {
    flexDirection: "row",
  },
  precisionBtn: {
    padding: 20,
  },
  precsiontText: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textWhite,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  disablePrecisionButtons: {
    opacity: 0.8,
  },
});
