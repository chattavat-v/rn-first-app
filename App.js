import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]); 

  const addGoalHandler = (valueGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        _id: Math.random().toString(),
        value: valueGoal
      }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoalHadler={addGoalHandler} />
      <FlatList
        keyExtractor={item => item._id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem _id={itemData.item._id} value={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
