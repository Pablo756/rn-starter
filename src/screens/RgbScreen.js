import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { RgbItem } from "../components/RgbItem";

function reducer(state, action) {
  switch (action.type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
}

export const RgbScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 255,
    green: 255,
    blue: 255,
  });
  const step = 15;

  return (
    <View
      style={[
        styles.ct,
        { backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` },
      ]}
    >
      <RgbItem
        color={state.red}
        titleInc={"more red"}
        onPressInc={() => dispatch({ type: "red", payload: step })}
        disabledInc={state.red === 255}
        titleDec={"less red"}
        onPressDec={() => dispatch({ type: "red", payload: -step })}
        disabledDec={state.red === 0}
      />
      <RgbItem
        color={state.green}
        titleInc={"more green"}
        onPressInc={() => dispatch({ type: "green", payload: step })}
        disabledInc={state.green === 255}
        titleDec={"less green"}
        onPressDec={() => dispatch({ type: "green", payload: -step })}
        disabledDec={state.green === 0}
      />
      <RgbItem
        color={state.blue}
        titleInc={"more blue"}
        onPressInc={() => dispatch({ type: "blue", payload: step })}
        disabledInc={state.blue === 255}
        titleDec={"less blue"}
        onPressDec={() => dispatch({ type: "blue", payload: -step })}
        disabledDec={state.blue === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    flex: 1,
    flexDirection: "column",
  },
});
