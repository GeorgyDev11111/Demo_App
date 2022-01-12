import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export const Navbar = (props) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3402ab',
    },
    text:{
        color: '#fff',
        fontSize: 20,
    }
})