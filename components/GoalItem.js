import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = ({ _id, value }) => {
  return (
    <View style={styles.listItem}>
      <Text>{_id}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    borderColor: "grey",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default GoalItem;
