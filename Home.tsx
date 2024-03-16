import React,{useEffect , useRef} from 'react';
import { Text, View , Button} from 'react-native';
import { styles } from './styles';
import HomeN from './HomeN';
import ExploreN from './ExploreN';
import LovedN from './LovedN';
import SettingN from './SettingN';
import * as Animatable from 'react-native-animatable';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import{Entypo , MaterialIcons , FontAwesome , Ionicons} from '@expo/vector-icons';
import RowCompo from './coomm/RowCompo';


const Tap = createBottomTabNavigator();


const Home =() =>{
    return(
       
     
    <Tap.Navigator
       screenOptions={({route}) => ({
        headerShown:false,
        tabBarIcon: ({focused, color, size}) => {
             
            if (route.name === 'HomeN') {
                return (
                    
                    <RowCompo localStyles={{backgroundColor: focused?  '#FFF' : '#047FFF' }}>
                 <Entypo name='home' size={20} color={focused ?  '#047FFF' : 'white'}></Entypo>
                    {
                        focused && <Text style={styles.teicon}>Home</Text>
                    }
                    </RowCompo>
                    
                 );
            } else   if (route.name === 'Explore') {
                return (
                    <RowCompo localStyles={{backgroundColor: focused?  '#FFF' : '#047FFF' }}>
                <MaterialIcons name='explore' size={20} color={focused ? '#047FFF' : 'white'}></MaterialIcons>
                {
                        focused && <Text style={styles.teicon}>Explore</Text>
                    }
                </RowCompo>
                 );
            }else   if (route.name === 'Loved') {
                return (
                <RowCompo localStyles={{backgroundColor: focused?  '#FFF' : '#047FFF' }}>
                <FontAwesome name='heart' size={20} color={focused ? '#047FFF' : 'white'}></FontAwesome>
                {
                        focused && <Text style={styles.teicon}>Loved</Text>
                    }
                </RowCompo>

                );
            }else   if (route.name === 'Profile') {
                return (
                    <RowCompo localStyles={{backgroundColor: focused?  '#FFF' : '#047FFF' }} >
                <Ionicons name='person' size={20} color={focused ? '#047FFF' : 'white'}></Ionicons>
                {
                        focused && <Text style={styles.teicon}>Setting</Text>
                    }
                </RowCompo>
                );
                
            }
            
        },
        tabBarStyle : { justifyContent:'space-between',alignItems:'center', borderRadius:50,width:340,marginLeft:10, bottom:30,height:60, position:'absolute',paddingBottom:5,backgroundColor:'#047FFF',shadowColor:'#fff'},
           
        })}>
         
        <Tap.Screen name='HomeN' component={HomeN} options={{
            
            tabBarShowLabel:false,
        headerShown:false,
       
        }}></Tap.Screen>
        <Tap.Screen name='Explore' component={ExploreN} options={{
            headerShown:false,
            tabBarShowLabel:false,
        }}></Tap.Screen>
        <Tap.Screen name='Loved' component={LovedN} options={{
            headerShown:false,
            tabBarShowLabel:false,
        }}></Tap.Screen>
        <Tap.Screen name='Profile' component={SettingN} options={{
            tabBarShowLabel:false,
        
            
            headerShown:false ,
            
        }}></Tap.Screen>
     </Tap.Navigator>
       
    );
}

  

 export default Home;