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

export default () => {
  const { openSocket, closeSocket } = useOrderBook();
  return (
    <View style={styles.orderBook}>
      <View style={styles.header}>
        <Text style={styles.headText}>ORDER BOOK</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.precisionBtn}>
            <Text style={styles.precsiontText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.precisionBtn}>
            <Text style={styles.precsiontText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        ListHeaderComponent={<HeaderTitle />}
        data={[1, 2]}
        keyExtractor={(item) => JSON.stringify(item)}
        renderItem={(order) => <OrderRow order={order} />}
      />

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
    padding: 10,
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
});

const data = [
  226396,
  [
    [29306, 1, 0.00064373],
    [29305, 1, 0.01650109],
    [29304, 1, 0.170625],
    [29302, 1, 0.170636],
    [29301, 3, 0.26039327],
    [29300, 6, 0.37298],
    [29299, 2, 0.13046792],
    [29298, 4, 0.41443852],
    [29297, 3, 0.53044549],
    [29296, 1, 0.05],
    [29295, 1, 0.3861],
    [29294, 2, 0.539855],
    [29293, 2, 0.39137],
    [29292, 1, 0.05],
    [29291, 5, 3.04786904],
    [29290, 1, 1.9996],
    [29289, 2, 0.70003484],
    [29286, 6, 3.68779355],
    [29285, 2, 2.16701326],
    [29282, 2, 0.2067911],
    [29281, 4, 2.24133934],
    [29280, 1, 0.44187427],
    [29279, 1, 1.04842933],
    [29278, 2, 3.20956967],
    [29277, 2, 0.2884],
    [29308, 4, -0.00868],
    [29309, 3, -0.445092],
    [29310, 2, -0.09297653],
    [29311, 3, -0.54047779],
    [29312, 3, -0.50459524],
    [29313, 2, -0.6966],
    [29314, 2, -0.44404181],
    [29315, 2, -0.18775184],
    [29316, 1, -0.17251263],
    [29317, 2, -2.27230165],
    [29318, 1, -0.341093],
    [29319, 1, -0.7],
    [29320, 3, -0.81549594],
    [29322, 3, -0.45161503],
    [29323, 3, -2.58545248],
    [29325, 1, -0.01782097],
    [29326, 2, -3.2057],
    [29328, 2, -0.46191496],
    [29329, 1, -0.0221],
    [29330, 1, -0.0221],
    [29331, 3, -0.438],
    [29333, 1, -0.48016938],
    [29334, 1, -0.02164024],
    [29335, 2, -0.22845382],
    [29336, 2, -5.8814],
  ],
];
