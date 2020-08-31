import React from "react";
import { FlatList } from "react-native";
import { ImageListItem } from "../components/ImageListItem";
import { imgData } from "../constants/data";

export const ImageScreen = () => {
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={imgData}
      renderItem={({ item }) => {
        return <ImageListItem title={item.title} img={item.img} />;
      }}
    />
  );
};
