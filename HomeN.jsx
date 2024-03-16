import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from './screenns/HomeScreen';
import Hom from './screenns/Hom';
import TourDetailScreen from './screenns/TourDetailScreen';
const Stack = createStackNavigator();
const HomeN = () => {
    return (
        
         <Stack.Navigator>
         <Stack.Screen name='Hom' component={Hom} options={{headerShown:false}}></Stack.Screen>
          
         </Stack.Navigator>
       
    );
}; 

export default HomeN;