import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import LeftColumn from "./leftColumn";
import RightColumn from "./rightColumn";
import colors from "../assets/colors";
import { useSelector } from "react-redux";

export default () => {
  const { asks, bids } = useSelector((storeState) => storeState.orderBook);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={asks}
        renderItem={({ item }) => <LeftColumn ask={item} />}
      />
      <FlatList
        style={{ flex: 1 }}
        data={bids}
        renderItem={({ item }) => <RightColumn bid={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    flex: 1,
  },
});
