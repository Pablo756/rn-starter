import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "../components/Button";

function reducer(state, action) {
  switch (action.type) {
    case "set":
      return { count: state.count + action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const step = 1;

  return (
    <View style={styles.ct}>
      <Button
        title={"increase"}
        onPress={() => dispatch({ type: "set", payload: step })}
      />
      <Button
        title={"decrease"}
        onPress={() => dispatch({ type: "set", payload: -step })}
      />
      <Text style={styles.text}>Current</Text>
      <Text style={styles.text}>Count:</Text>
      <Text style={styles.text}>{state.count}</Text>
      <Button title={"reset"} onPress={() => dispatch({ type: "reset" })} />
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
