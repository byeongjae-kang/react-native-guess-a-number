import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: colors.primary,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Header;
