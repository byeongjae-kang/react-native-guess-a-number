import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import { AntDesign } from "@expo/vector-icons";

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
      <BodyText>Opponent's Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <AntDesign name="minuscircle" size={24} color="white" />
        </MainButton>

        <MainButton onPress={nextGuessHandler.bind(this, "higher")}>
          <AntDesign name="pluscircle" size={24} color="white" />
        </MainButton>
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
    justifyContent: "space-around",
    marginBottom: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
