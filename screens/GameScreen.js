import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

function GameScreen(props) {
  const { userChoice, onGameOver } = props;
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [currentRound, setCurrentRound] = useState(0);
  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(currentRound);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && userChoice > currentGuess) ||
      (direction === "higher" && userChoice < currentGuess)
    ) {
      Alert.alert("Don't lie!!", "You know that is wrong...", [
        { text: "Sorry", style: "cancel" }
      ]);
      return;
    }

    if (direction === "lower") {
      currentMax.current = currentGuess;
    }
    if (direction === "higher") {
      currentMin.current = currentGuess;
    }
    const nextGuessNumber = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextGuessNumber);
    setCurrentRound((current) => current + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Lower"
            onPress={nextGuessHandler.bind(this, "lower")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Higher"
            onPress={nextGuessHandler.bind(this, "higher")}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 300,
    maxWidth: "80%"
  },
  button: {
    width: "40%"
  }
});

export default GameScreen;
