import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

export default Display_1 = (props) => {

    return(
        <View style={styles.container}>
        <Text style={styles.text}>Нажмите вперед чтобы продолжить</Text>
        <Button 
        title='Вперёд'
        onPress={() => props.navigation.navigate('Home2')}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 40,
    }
})