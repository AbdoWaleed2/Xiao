import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Sett from './screenns/Sett';

const Stack = createStackNavigator();
const SettingN= () => {
    return (
        
         <Stack.Navigator>
            <Stack.Screen name='Sett' component={Sett} options={{headerShown:false}} ></Stack.Screen>
          
          
         </Stack.Navigator>
        
    );
}; 

export default SettingN;