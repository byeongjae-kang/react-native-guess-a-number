import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import BodyText from "./BodyText";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <BodyText style={styles.number}>{props.children}</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: colors.accent,
    fontSize: 22
  }
});

export default NumberContainer;
