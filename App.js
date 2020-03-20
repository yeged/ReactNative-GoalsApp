import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  // function handleChange(event){
  //   setEnteredGoal(event.target.value)
  // }

  function handleChange(enteredText) {
    setEnteredGoal(enteredText)
  }

  function addGoalHandler() {
    console.log(enteredGoal)
    setCourseGoals((prevValue) => [...prevValue, {
      id: Math.random().toString,
      value: enteredGoal
    }])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Course Goals" onChangeText={handleChange} value={enteredGoal} />
        <Button onPress={addGoalHandler} title="Add" />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <Text>{itemData.item.value}</Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "70%",
    padding: "5%"
  }
});
