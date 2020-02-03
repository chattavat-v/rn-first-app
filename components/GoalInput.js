import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ onAddGoalHadler }) => {
  const [enterGoal, setEnterGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnterGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input..."
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enterGoal}
      />
      <Button title="ADD" onPress={() => onAddGoalHadler(enterGoal)} />
    </View>
  )
};

const styles = StyleSheet.create({
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

export default GoalInput;