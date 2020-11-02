import React, { useReducer } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

function reducer(state, action) {
  switch (action.type) {
    case "check1":
      return action.payload.length < 6
        ? { ...state, message1: state.message, value1: action.payload }
        : { ...state, message1: "", value1: action.payload };
    case "change2":
      return { ...state, value2: action.payload };
    case "check2":
      return state.value2.length < 6
        ? { ...state, message2: state.message }
        : { ...state, message2: "" };
    default:
      return state;
  }
}

export const PasswordScreen = () => {
  const title1 = "Password1:";
  const title2 = "Password2:";
  const [state, dispatch] = useReducer(reducer, {
    message: "Your password must be a least 5 symbols",
    message1: "",
    message2: "",
    value1: "",
    value2: "",
  });

  return (
    <View style={styles.ct}>
      <Text style={styles.title1}>{title1}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => dispatch({ type: "check1", payload: text })}
        value={state.value1}
        autoCorrect={false}
        autoCapitalize={false}
        secureTextEntry={true}
      />
      <Text style={styles.desc}>{state.message1}</Text>

      <Text style={styles.title2}>{title2}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => dispatch({ type: "change2", payload: text })}
        onBlur={() => dispatch({ type: "check2" })}
        value={state.value2}
        autoCorrect={false}
        autoCapitalize={false}
        secureTextEntry={true}
      />
      <Text style={styles.desc}>{state.message2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    flex: 1,
    marginHorizontal: 35,
    marginTop: 40,
  },
  title1: {
    fontSize: 28,
    textAlign: "center",
  },
  title2: {
    marginTop: 40,
    fontSize: 28,
    textAlign: "center",
  },
  input: {
    marginTop: 20,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 16,
  },
  desc: {
    fontSize: 16,
    color: "red",
  },
});
