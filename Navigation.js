import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Slider from './Slider';
import FSc2 from './FSc2';
import FSc3 from './FSc3';
import Home from './Home';
import TourDetailScreen from './screenns/TourDetailScreen';
const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Slider" options={{headerShown:false}}  component={Slider}></Stack.Screen>
          
            <Stack.Screen name="FSc2"  options={{headerShown:true , title:"Back"} }  component={FSc2}></Stack.Screen>
            <Stack.Screen name="FSc3"  options={{headerShown:true , title:"Back"}}  component={FSc3}></Stack.Screen>
            <Stack.Screen name='TourDetailScreen' component={TourDetailScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Home"  options={{headerShown:false}}  component={Home}></Stack.Screen>
         </Stack.Navigator>
        </NavigationContainer>
    );
}; 

export default Navigation;