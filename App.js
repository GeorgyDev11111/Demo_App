import React from 'react'
import {} from 'react-native';
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
                    options={{title: 'Welcome'}}
                    />
            <Stack.Screen 
                    name='Home2'
                    component={Link}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}