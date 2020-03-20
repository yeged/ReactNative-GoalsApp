import React,{useState} from "react";
import {StyleSheet, View, TextInput, Button} from "react-native";


function GoalInput(props){

    const [enteredGoal, setEnteredGoal] = useState("");

    function handleChange(enteredText) {
        setEnteredGoal(enteredText)
      }

    return(
        <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Course Goals" onChangeText={handleChange} value={enteredGoal} />
        <Button onPress={() => props.addGoalHandler(enteredGoal)} title="Add" />
      </View>
    )
    
}

const styles = StyleSheet.create({
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
      },
})

export default GoalInput;