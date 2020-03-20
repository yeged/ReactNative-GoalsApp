import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";


function GoalInput(props) {

    const [enteredGoal, setEnteredGoal] = useState("");

    function handleChange(enteredText) {
        setEnteredGoal(enteredText)
    }

    function addGoalHandler() {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <Modal visible={props.vision} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Course Goals" onChangeText={handleChange} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={props.onCancel} color="red" title="CANCEL" />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="Add" />
                    </View>
                </View>
            </View>
        </Modal>

    )

}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1

    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: "70%",
        padding: "5%",
        margin: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "60%",
    },
    button: {
        width: "40%"
    }
})

export default GoalInput;