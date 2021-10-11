import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView
} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

function GameOverScreen(props) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Game is over!!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.guessRounds}</Text> round(s)
            to guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>.
          </BodyText>
        </View>
        <MainButton onPress={props.onNewGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: Dimensions.get("window").width / 20,
    marginVertical: Dimensions.get("window").height / 30
  },
  resultText: {
    fontSize: Dimensions.get("window").width / 15,
    textAlign: "center"
  },
  highlight: {
    color: colors.primary
  }
});

export default GameOverScreen;
