import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: "#f7287b",
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18
  }
});

export default Header;