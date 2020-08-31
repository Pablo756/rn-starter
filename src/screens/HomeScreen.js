import React from "react";
import { Button } from "../components/Button";
import { navigateData } from "../constants/data";
import { FlatList } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={navigateData}
      renderItem={({ item }) => {
        return (
          <Button
            title={item.title}
            onPress={() => navigation.navigate(item.navigate)}
          />
        );
      }}
    />
  );
};
