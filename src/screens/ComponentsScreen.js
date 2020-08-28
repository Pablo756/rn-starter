import React from "react";
import { Text, StyleSheet } from "react-native";

export const ComponentsScreen = () => {
  return <Text style={styles.text}>Люблю Поличку Огневу!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
