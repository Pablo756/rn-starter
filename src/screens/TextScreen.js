import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export const TextScreen = () => {
  const title = "Print name:";
  const description = "My name is";
  const [value, setValue] = useState("");

  return (
    <View style={styles.ct}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        autoCorrect={false}
        autoFocus={true}
        maxLength={30}
      />
      <Text style={styles.desc}>
        {description} {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    marginHorizontal: 40,
    marginTop: 50,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  input: {
    marginVertical: 20,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 16,
  },
  desc: {
    fontSize: 22,
  },
});
