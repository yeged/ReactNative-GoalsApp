import React from "react";
import {StyleSheet, View, Text} from "react-native";


function GoalItems(props){
    return(
        <Text style={styles.listItem}>{props.title}</Text>
    )
}


const styles = StyleSheet.create({
    listItem:{
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginVertical: 20,
        backgroundColor: "#ccc"
      }
})

export default GoalItems;