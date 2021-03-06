import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Alert} from 'react-native';

export const Todo = (props) => {

    return(
        <TouchableOpacity
        activeOpacity={0.1}
         onLongPress={() => props.onRemove(props.todo.id)}
         onPress={() => Alert.alert( `Запись была сделанна:  ${props.todo.date}`)}
        >
        <View style={styles.todoc}>
            <Text>{props.todo.title }</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todoc:{
     flexDirection: 'row',
     alignItems: 'center',
     padding: 15,
     borderWidth: 2,
     borderColor: '#38354a',
     borderRadius: 5,
     marginBottom:10,
     backgroundColor: '#cc6088'
    }
})