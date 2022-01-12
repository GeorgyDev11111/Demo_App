import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export const Todo = (props) => {

    return(
        <TouchableOpacity
        activeOpacity={0.1}
         onPress={() => console.warn('ToDo')}
         onLongPress={() => props.onRemove(props.todo.id)}
        >
        <View style={styles.todo}>
            <Text>{props.todo.title}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todo:{
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