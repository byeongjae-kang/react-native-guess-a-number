import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../constants/colors";
import BodyText from "./BodyText";

function MainButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={props.onPress}>
      <View style={styles.button}>
        <BodyText style={styles.text}>{props.children}</BodyText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  text: {
    color: "white",
    fontSize: 18
  }
});

export default MainButton;
