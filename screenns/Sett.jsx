import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';
import 'react-native-gesture-handler';




const Sett = () => {
    const [buttonColor, setButtonColor] = useState('#000')
    const hand = () => {
    setButtonColor('#047FFF');
    }
    return (
    <SafeAreaView>
    <View style={{ padding: 14* 2 }}>
        <View

style={{
  flexDirection:'row',
  justifyContent: "space-between",
  alignItems: "center",
}}
>

<Image
  style={{
    height: 14 * 5,
    width: 14 * 5,
    borderRadius: 14 * 5,
  }}
  source={require("../assets/images/Avatar.jpg")}
/>
<TouchableOpacity style={
    {
    textAlign: 'center',
    position: 'relative',
    paddingTop :20,
    ///marginLeft ,
//backgroundColor: "#f00",
//flexDirection : 'row',
padding :10,
//marginTop :40,
marginRight :5,
backgroundColor : '#047FFF',
borderRadius:25,
width:129,
height:50
}}>
    <Text style={
    {
    textAlign: 'center', bottom:6, color:'#FFF'}} >Profile Edit</Text>
</TouchableOpacity>
  </View>
  <View>
    <Image   style={{
    height: 150,
    width: 300,
    top:30,
   borderRadius:10
  }}
  source={require("../assets/images/Avatar1.png")}
  >

    </Image>
  </View>
  <View style={{ flexDirection: "row", marginBottom:14* 2, top:50 }}>
              <TouchableOpacity
                style={{ paddingVertical: 14, marginRight: 14 * 2,}}
                onPress={hand}
              >
                <Text
                
                  style={{
                   color:buttonColor,
                    fontWeight: "bold",
                    fontSize: 16 ,
                  }}
                >
                  About {"\n"} _
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingVertical: 14, marginRight: 14 * 2 }}
              >
                <Text  style={{
                    color:'#000',
                    fontWeight: "400",
                    fontSize: 16 ,
                  }}>favourite</Text>
              </TouchableOpacity>

             
            </View>
            <View style={{  marginBottom:14* 2, top:50 }}>
                <Text  style={{
                    color:'#000',
                    fontWeight: "600",
                    fontSize: 16 ,}}>About</Text>
                <Text style={{paddingTop:15}}>I`m abdo , I wanna kiss you (:</Text>
            </View>
            <View style={{  marginBottom:14* 2, top:50 }}>
                <Text  style={{
                    color:'#000',
                    fontWeight: "600",
                    fontSize: 16 ,}}>Phone Number</Text>
                <Text style={{paddingTop:15}}> +20155435044</Text>
            </View>
            <View style={{  marginBottom:14* 2, top:50 }}>
                <Text  style={{
                    color:'#000',
                    fontWeight: "600",
                    fontSize: 16 ,}}>Address</Text>
                <Text style={{paddingTop:15}}> ElQantara Sharq </Text>
            </View>
</View>
    </SafeAreaView>
    );
}; 

export default Sett;