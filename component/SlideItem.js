import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View>
    
    <LinearGradient colors={['#047FFF', '#FFF']} style={styles.container}>
   
      <Animated.Image
        source={item.img}
        
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />
      
<Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      <View style={styles.content}>
        
       
      </View>
    </LinearGradient>
    </View>
    

  );
};

export default SlideItem;

const styles = StyleSheet.create({
  
  container: {
    paddingTop:-100,
    
    width,
    height,
    alignItems: 'center',
  },
  image: {
    height:'50%',
    
    borderRadius:300,
    flex: 0.6,
    width: '100%',
    top:120,
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
    marginTop:100,
  },
  title: {
    top : 180,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  description: {
    top : 175,
    fontSize: 18,
    marginVertical: 12,
    color: '#333',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
