import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";


function GoalInput(props) {

    const [enteredGoal, setEnteredGoal] = useState("");

    function handleChange(enteredText) {
        setEnteredGoal(enteredText)
    }

    function addGoalHandler(){
        props.addGoalHandler(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <Modal visible={props.vision} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Course Goals" onChangeText={handleChange} value={enteredGoal} />
                <Button onPress={props.onCancel} color="red" title="CANCEL" />
                <Button onPress={addGoalHandler} title="Add" />
            </View>
        </Modal>

    )

}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex:1

    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: "70%",
        padding: "5%",
        margin: 10
    },
})

export default GoalInput;