import React from "react";
import { Text, StyleSheet, } from "react-native";
import { Button } from "./Button";

export const RgbItem = ({
  color,
  titleInc,
  onPressInc,
  disabledInc,
  titleDec,
  onPressDec,
  disabledDec,
}) => {
  return (
    <>
      <Text style={styles.text}>Red: {color}</Text>
      <Button title={titleInc} onPress={onPressInc} disabled={disabledInc} />
      <Button title={titleDec} onPress={onPressDec} disabled={disabledDec} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 30,
    textAlign: "center",
  },
});
