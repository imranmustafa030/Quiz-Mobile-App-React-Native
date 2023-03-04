import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../components/title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={require("../Images/pic.png")}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex:1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%"
  },
  button:{
    width:'100%',
    backgroundColor:"#bf74cd",
    padding: 16,
    marginBottom:30,
    borderRadius: 16,
    alignItems:"center",
    shadowColor: "black",
    shadowOpacity: 0.1,
  },
  buttonText:{
    fontSize:20,
    fontWeight: "600",
    color:"white",
  }
});
