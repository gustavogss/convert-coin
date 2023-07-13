import React, { useState } from "react";
import RNPicker from "react-native-picker-select";
import { StyleSheet } from "react-native";

export function Picker({ moedas }) {
  const placeholder = {
    label: "Escolha uma moeda...",
    value: null,
    color: "#000",
  };

  return (
    <RNPicker
      placeholder={placeholder}
      items={moedas}
      onValueChange={(valor) => console.log(valor)}
      style={{
        inputAndroid: {
          fontSize: 20,
          color: "#2d2c2c",
          fontWeight: "600",
        },
        inputIOS: {
          fontSize: 20,
          color: "#2d2c2c",
          fontWeight: "600",
        },
      }}
    />
  );
}
const styles = StyleSheet.create({
  pick: {
    color: "#121212",
    fontWeight: "bold",
    fontSize: 20,
  },
});
