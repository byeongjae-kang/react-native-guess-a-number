import React from "react";
import { View, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    //for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    //for android
    elevation: 10
  }
});

export default Card;
