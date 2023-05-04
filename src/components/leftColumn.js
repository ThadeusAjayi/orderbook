import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../assets/colors";

export default ({ data }) => {
  const priceBar = React.useMemo(() => {
    return { width: "70%" };
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.priceBar, priceBar]} />
      <View style={styles.row}>
        <Text style={styles.startText}>2.999</Text>
        <Text style={styles.endText}>48834</Text>
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
    marginLeft: 20,
  },
  endText: {
    textAlign: "right",
    color: colors.textWhite,
  },
  priceBar: {
    width: "100%",
    right: 0,
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: colors.green,
    zIndex: -1,
  },
});
