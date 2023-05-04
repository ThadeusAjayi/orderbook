import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../assets/colors";

export default ({ bid }) => {
  const priceBar = React.useMemo(() => {
    return { width: "10%" };
  }, []);
  return (
    <View style={styles.container}>
      <View style={[styles.priceBar, priceBar]} />
      <View style={styles.row}>
        <Text style={styles.startText}>{bid.amount}</Text>
        <Text style={styles.endText}>{bid.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  startText: {
    textAlign: "left",
    color: colors.textWhite,
  },
  endText: {
    textAlign: "right",
    color: colors.textWhite,
    marginRight: 20,
  },
  priceBar: {
    width: "100%",
    left: 0,
    right: 0,
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: colors.red,
    zIndex: -1,
  },
});
