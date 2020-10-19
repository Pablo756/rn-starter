import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const Button = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity style={styles.ct} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ct: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    backgroundColor: "#699490",
    borderColor: "#000",
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
  },
});
