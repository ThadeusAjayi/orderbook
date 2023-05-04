import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../assets/colors";

export default ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.buyStartText}>AMOUNT</Text>
        <Text style={styles.buyEndText}>PRICE</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.startText}>PRICE</Text>
        <Text style={styles.endText}>AMOUNT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buyStartText: {
    textAlign: "left",
    color: colors.titleText,
    marginLeft: 20,
  },
  buyEndText: {
    textAlign: "right",
    color: colors.titleText,
  },
  startText: {
    textAlign: "left",
    color: colors.titleText,
  },
  endText: {
    textAlign: "right",
    color: colors.titleText,
    marginRight: 20,
  },
});
