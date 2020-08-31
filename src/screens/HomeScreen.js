import React from "react";
import { Button } from "../components/Button";

export const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title={"Components screen"}
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title={"List screen"}
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title={"Image screen"}
        onPress={() => navigation.navigate("Image")}
      />
    </>
  );
};
