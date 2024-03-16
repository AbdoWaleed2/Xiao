import {Animated, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Slides from './data';
import SlideItem from './component/SlideItem';
import Pagination from './component/Pagination';

const Slider = ({navigation}) => {
  const [index] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  

 

  return (
    <View >
      <FlatList 
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
       
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      <View style={styles.containe}>
    <TouchableOpacity onPress={() => navigation.navigate ('FSc2')} style={styles.bff}>
      <Text style={{color:'#FFF',textAlign:'center'}}>Get Started</Text>
      </TouchableOpacity >
      
    </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  containe:{
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
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
