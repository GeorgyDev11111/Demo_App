import React from 'react'
import  Display_1  from './components/Display_1';
import { Link } from './components/Link';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default App = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name='Home'
                    component={Display_1}
                    options={{headerStyle:{backgroundColor:'rgb(34,34,34)'}, statusBarHidden:true,title:''}}
                    />
            <Stack.Screen 
                    name='Home2'
                    component={Link}
                    // options={{statusBarHidden:true}}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}