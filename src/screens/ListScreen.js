import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

export const ListScreen = () => {
  const data = [
    { title: "Friend_1", age: 21 },
    { title: "Friend_2", age: 22 },
    { title: "Friend_3", age: 23 },
    { title: "Friend_4", age: 24 },
    { title: "Friend_5", age: 25 },
    { title: "Friend_6", age: 26 },
    { title: "Friend_7", age: 27 },
    { title: "Friend_8", age: 28 },
    { title: "Friend_9", age: 29 },
    { title: "Friend_10", age: 30 },
    { title: "Friend_11", age: 31 },
    { title: "Friend_12", age: 32 },
    { title: "Friend_13", age: 33 },
    { title: "Friend_14", age: 34 },
  ];

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={data}
      renderItem={({ item }) => {
        return (
          <View style={styles.ct}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>age: {item.age}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  ct: {
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 30,
  },
});
