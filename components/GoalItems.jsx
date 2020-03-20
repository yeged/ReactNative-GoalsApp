import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";


function GoalItems(props){
    return(
        //<TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
        <View>
        <Text style={styles.listItem}>{props.title}</Text>
        </View>
        </TouchableOpacity>
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