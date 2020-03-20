import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItems from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  // function handleChange(event){
  //   setEnteredGoal(event.target.value)
  // }



  function addGoalHandler(enteredGoal) {
    console.log(enteredGoal)
    setCourseGoals((prevValue) => [...prevValue, {
      id: Math.random().toString(),
      value: enteredGoal
    }])
    setIsAddModal(false);
  }

  function deleteItem(goalId) {
    setCourseGoals((prevValue) => {
      return prevValue.filter((value, index) => {
        return value.id !== goalId
      })
    })

  }

  function cancelHandler(){
    setIsAddModal(false)
  }


  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddModal(true)} />
      <GoalInput
        vision={isAddModal}
        addGoalHandler={addGoalHandler}
        onCancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItems onDelete={deleteItem} id={itemData.item.id} title={itemData.item.value} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
