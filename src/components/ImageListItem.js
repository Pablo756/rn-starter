import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

export const ImageListItem = ({ title, img }) => {
  return (
    <View style={styles.ct}>
      <Image style={styles.img} source={img} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
});
