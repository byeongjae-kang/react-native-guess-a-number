import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

function StartGameScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </View>
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
    backgroundColor: "white",
    padding: 20,
    //for android
    elevation: 10,
    //for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10
  }
});

export default StartGameScreen;
