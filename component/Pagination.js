import {StyleSheet, Animated, View,Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
const {width} = Dimensions.get('screen');

const Pagination = ({data, scrollX }, {navigation}) => {
  return (
    <View>
      
    <View style={styles.container}>
      
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [25, 90, 25],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.1],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#0480FE', '#0480FE', '#0480FE'],
          extrapolate: 'clamp',
        });

        return (
         
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              {width: dotWidth, backgroundColor},
              // idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    

    </View>
    
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  containe:{
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 120,
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 25,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#0480FE',
  },
  dotActive: {
    backgroundColor: '#0480FE',

  },
  bff:{
    paddingTop :15,
    //marginLeft :10,
   // padding :10,
marginTop :60,
//marginRight :50,
    //position: 'relative',
    textAlign: 'center',
    backgroundColor : '#047FFF',
borderRadius:25,
width:300,
height:50,
  },
});
