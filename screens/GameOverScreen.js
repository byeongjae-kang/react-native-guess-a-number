import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Game is over!!</Text>
      <Text>Number of Round(s): {props.guessRounds}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onNewGame} />
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
