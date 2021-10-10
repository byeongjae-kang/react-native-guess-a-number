import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";

function StartGameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  title: {
    fontSize: 20,
    paddingVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    padding: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10
  },
  button: {
    width: "40%"
  }
});

export default StartGameScreen;
