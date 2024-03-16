import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Expl from './screenns/Expl';
import HomeScreen from './screenns/HomeScreen';
import TourDetailScreen from './screenns/TourDetailScreen';
const Stack = createStackNavigator();
const ExploreN = () => {
    return (
        
         <Stack.Navigator>
            
         <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} ></Stack.Screen>
        
         </Stack.Navigator>
       
    );
}; 

export default ExploreN;