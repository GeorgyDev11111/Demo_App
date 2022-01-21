import React from 'react';
import {View,Text,StyleSheet, Button,ImageBackground,TouchableOpacity} from 'react-native';
import img from '../assets/logo-og.png'

export default Display_1 = (props) => {

    return(

        <ImageBackground source={img} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Реактивные</Text>
        <Text style={styles.text}>заметки</Text>
        <View style={{flex:1,justifyContent:'flex-end'}}>
        <TouchableOpacity
        style={styles.buttons}
        onPress={() => props.navigation.navigate('Home2')}
      >
        <Text style={{fontSize:20}}>Перейти</Text>
      </TouchableOpacity>
        </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 40,
        color:'white',
        textAlign: 'center'
    },
    image: {
        flex: 1,
        width: '100%',
        height:'100%'
      },

    buttons: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        backgroundColor: 'yellow'
      },
})