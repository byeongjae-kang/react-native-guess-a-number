import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const StartGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let screen = <StartGameScreen onGameStart={StartGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
