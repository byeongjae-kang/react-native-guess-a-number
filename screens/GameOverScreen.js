import React from "react";
import { Button, StyleSheet, View } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>Game is over!!</TitleText>
      <BodyText>Number of Round(s): {props.guessRounds}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
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
