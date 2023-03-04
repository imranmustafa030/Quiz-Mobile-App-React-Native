import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Home from "./Screens/home";
import Quiz from "./Screens/quiz";
import Result from "./Screens/result";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";

const App = () => {
  return (

    <NavigationContainer>
        <MyStack />
    </NavigationContainer>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
