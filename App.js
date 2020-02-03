import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Hello work React Native");

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Input..." style={styles.input} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    // flexDirection: 'colum', //column top to down
    flexDirection: "row", //row left to right
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "80%"
  }
});
