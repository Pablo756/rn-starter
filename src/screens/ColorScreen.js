import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import { Button } from "../components/Button";

export const ColorScreen = () => {
  const [colorData, setColorData] = useState([]);

  return (
    <View style={styles.ct}>
      <Button
        title={"Add Color"}
        onPress={() => setColorData([...colorData, randomRgb()])}
      />
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={colorData}
        renderItem={({ item }) => {
          return <View style={[styles.color, { backgroundColor: item }]} />;
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  ct: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  color: {
    marginTop: 10,
    marginHorizontal: 30,
    height: 45,
  },
  list: {
    marginVertical: 10,
  },
  listContent: {
    marginBottom: 20,
  },
});
