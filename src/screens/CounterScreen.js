import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "../components/Button";

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.ct}>
      <Button title={"increase"} onPress={() => setCount(count + 1)} />
      <Button title={"decrease"} onPress={() => setCount(count - 1)} />
      <Text style={styles.text}>Current</Text>
      <Text style={styles.text}>Count:</Text>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    flexDirection: "column",
  },
  text: {
    marginTop: 10,
    fontSize: 30,
    textAlign: "center",
  },
});
