import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Lov from './screenns/Lov';

const Stack = createStackNavigator();
const LovedN = () => {
    return (
        
         <Stack.Navigator>
            
         <Stack.Screen name='Lov' component={Lov}options={{headerShown:false}} ></Stack.Screen>
          
         </Stack.Navigator>
        
    );
}; 

export default LovedN;