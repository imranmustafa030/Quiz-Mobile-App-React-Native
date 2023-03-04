import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import React from "react";

const Result = ({ navigation, route }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.resultHead}>
        <Text style={styles.resultText}>Result</Text>
        <Text style={styles.resultText}>{score}</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={require("../Images/result2.png")}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go Back Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "50%",
    backgroundColor: "#bf74cd",
    padding: 16,
    marginBottom: 30,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
 
  },
  resultText: {
    fontSize: 36,
    fontWeight: "600",
  },
  resultHead:{
    justifyContent: "center",
    alignItems: "center",
    marginTop:30
    
  }
});
