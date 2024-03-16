import React, {useState} from 'react';
import { Text, View , TextInput , TouchableOpacity , SafeAreaView , ScrollView} from 'react-native';
import { styles } from './styles';
import {FontAwesome5, MaterialCommunityIcons, Fontisto , EvilIcons} from '@expo/vector-icons';

const FSc2 = ({navigation}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    

const handleSignIn = () => {
    console.log('SignIng in with:',email,password);
     navigation.navigate('Home')
}

    return(

   
   <SafeAreaView>
    <View style={{paddingLeft:20, backgroundColor:'#FFF'}}>

<View style={{paddingRight:180, backgroundColor:'#FFF'
}}>
   <Text style={{fontStyle:'normal' , fontSize:30 , fontWeight:'bold', padding:1 }}>Welcome Back</Text>
   </View>
  
   <Text style={{bottom:-20}}>Fill in the from and create and account</Text>
   
   


   <TextInput style={styles.tii}
   placeholder="Email"
   value={email}
   onChangeText={setEmail}
   >
    
   </TextInput>
   <MaterialCommunityIcons name="email-outline" size={24} color={'black'}style={{bottom:-13 ,textAlign:'right', marginRight:50}}></MaterialCommunityIcons>
   
   
   <TextInput style={styles.tii5}
   placeholder="Password"
   secureTextEntry
   value={password}
   onChangeText={setPassword}></TextInput>
<FontAwesome5 name="eye-slash" size = {20}style={{bottom:-35 ,textAlign:'right', marginRight:50}} ></FontAwesome5>
   <TouchableOpacity title="Sign in" onPress={handleSignIn}  
    style={styles.bby}>
    <Text style={{textAlign:'center',color:'white',width:260, marginLeft:10, marginRight:20,marginBottom:5,marginTop:-6.5}}>Sign in with E-mail</Text>
   </TouchableOpacity>
   <Text style={{textAlign:'center',bottom:-129, fontSize:20}}>Or</Text>
   <TouchableOpacity style={styles.bby1}><Text style={{textAlign:'center',color:'white',width:260, marginLeft:25, marginRight:20,marginBottom:5,marginTop:-6.5}} >Sign in with Google</Text></TouchableOpacity>
   <Fontisto name='google' size={24} color={'white'} style={{textAlign:'left', bottom:-92, marginLeft:80}}></Fontisto>
   <TouchableOpacity style={styles.bby2}><Text   style={{textAlign:'center',color:'white',width:260, marginLeft:20, marginRight:20,marginBottom:5,marginTop:-6.5}}>Sign in with Facebook</Text></TouchableOpacity>
   <EvilIcons name='sc-facebook' size={26} color={"#FFF" } style={{bottom:-93, marginLeft:75} }></EvilIcons>
   <Text style={{bottom:-250,textAlign:'center'}} onPress={() => navigation.navigate('FSc3')}>Don't have an account? Sign Up</Text>
  
  </View>
   </SafeAreaView>

   
 

     

    );

}
 export default FSc2;