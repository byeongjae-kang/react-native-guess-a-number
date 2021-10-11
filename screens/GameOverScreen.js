import React from "react";
import { StyleSheet, Text, View } from "react-native";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Game is over!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default GameOverScreen;
