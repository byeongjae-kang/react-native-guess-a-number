import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, Dimensions } from "react-native";
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
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );
  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setScreenHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
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
      currentMin.current = currentGuess + 1;
    }
    const nextGuessNumber = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextGuessNumber);
    setPastGuesses((existingGuesses) => [nextGuessNumber, ...existingGuesses]);
  };

  const rotatedViews =
    screenHeight < 450 ? (
      <View style={styles.control}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <AntDesign name="minuscircle" size={24} color="white" />
        </MainButton>
        <NumberContainer>{currentGuess}</NumberContainer>
        <MainButton onPress={nextGuessHandler.bind(this, "higher")}>
          <AntDesign name="pluscircle" size={24} color="white" />
        </MainButton>
      </View>
    ) : (
      <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minuscircle" size={24} color="white" />
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, "higher")}>
            <AntDesign name="pluscircle" size={24} color="white" />
          </MainButton>
        </Card>
      </>
    );

  return (
    <View style={styles.screen}>
      <BodyText>Opponent's Guess</BodyText>
      {rotatedViews}
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.toString()}
          data={pastGuesses}
          renderItem={(dataItem) => (
            <View style={styles.listItem}>
              <BodyText>#{pastGuesses.length - dataItem.index}</BodyText>
              <BodyText>{dataItem.item}</BodyText>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  control: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "45%"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: 300,
    maxWidth: "80%"
  },
  listContainer: {
    width: "60%",
    flex: 1
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 15,
    padding: 15,
    width: "100%"
  }
});

export default GameScreen;
