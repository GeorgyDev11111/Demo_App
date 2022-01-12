import React,{useState} from 'react';
import {View,StyleSheet,TextInput,Button,Alert} from 'react-native';

let count = 0;

export const GlobalCount = () => count = 0;

export const AddToDo = (props) => {

    const [value, setValue] = useState('');

    const pressHendler = () => {
        
        if(value.trim()){
            count++;
            props.onSubmit(count +") "+ value);
            setValue('');
        }else{
            Alert.alert('Значение поля не может быть пустым')
        }
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Введите текст'
                autoCorrect={false}
                // placeholderTextColor='red'
            />
            <Button title='Add' onPress={pressHendler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,

    },
    input: {
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: "#3402ab",
    },
})
