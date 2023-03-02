import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RegisterProgressBar from "../components/RegisterProgressBar";
import { useNavigation } from "@react-navigation/native";
import WomanManChat from "../svgs/WomaManChat";
import theme from "../theme";
import Constants from "expo-constants";

const colors = theme.colors;

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.omitirButton}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.omitirText}>Omitir</Text>
        </TouchableOpacity>
        <WomanManChat style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Inicia una conversación</Text>
          <Text style={styles.subtitle}>
            Da el primer paso y conversa con aquellas personas que estan en la
            bandeja de mensajes.
          </Text>
        </View>
        <View style={styles.progressContainer}>
          <RegisterProgressBar currentStep={3} numSteps={4} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Onboarding4")}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 0,
  },
  imageContainer: {
    marginTop: Constants.statusBarHeight,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  omitirButton: {
    position: "absolute",
    top: 20,
    right: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 1,
  },
  omitirText: {
    fontSize: 14,
    fontWeight: "bold",
    color: `${colors.details}`,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  titleContainer: {
    justifyContent: "center",
    flex: 1,
    lineHeight: 20,
  },
  title: {
    fontSize: 20,
    color: "#525252",
    fontWeight: "500",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#525252",
    fontWeight: "500",
  },
  progressContainer: {
    width: "100%",
    marginBottom: 40,
  },
  button: {
    width: 280,
    height: 38,
    backgroundColor: "#fff",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#091D5C",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: `${colors.secondary}`,

    fontSize: 14,
    fontWeight: "500",
  },
});

export default Onboarding3;
