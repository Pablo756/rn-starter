import React from "react";
import { Text, StyleSheet } from "react-native";

export const ComponentsScreen = () => {
  const title = "Polina Ogneva";

  return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
