import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAddGoalHadler, visible, onCancel }) => {
  const [enterGoal, setEnterGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnterGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoalHadler(enterGoal);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Input..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "80%"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '60%'
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
