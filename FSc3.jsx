import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import {
    Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
  EvilIcons,
} from "@expo/vector-icons";


const FSc3 = ({navigation}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setname] = useState('');
const [passwordC, setPasswordC] = useState('');

const handleSignUp = () => {
  
    console.log('SignIng Up with:',email,password);
    navigation.navigate("FSc2");
}
    return(

        <SafeAreaView>
        <View style={{ paddingLeft: 20, backgroundColor: "#FFF" }}>
          <View style={{ paddingRight: 180, backgroundColor: "#FFF" }}>
            <Text
              style={{
                fontStyle: "normal",
                fontSize: 30,
                fontWeight: "bold",
                padding: 1,
              }}
            >
              Sign Up
            </Text>
          </View>
  
          <Text style={{ bottom: -20 }}>
            Fill in the from and create and account
          </Text>

          <View style={{flexDirection:'row'}}>
  
          <TextInput
            style={styles.tii1}
            placeholder="Full Name"
            value={name}
            onChangeText={setname}
          ></TextInput>
          <Ionicons
            name="person-outline"
            size={20}
            color={"black"}
            style={{ bottom: -65, textAlign: "right", marginRight: 55 }}
          ></Ionicons>
          </View>



          <View style={{flexDirection:'row'}}>
  
          <TextInput
            style={styles.tii2}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          ></TextInput>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={"black"}
            style={{ bottom: -82, textAlign: "right", marginRight: 50 }}
          ></MaterialCommunityIcons>
          </View>


          <View style={{flexDirection:'row'}}>
  
          <TextInput
            style={styles.tii3}
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          ></TextInput>
 <FontAwesome5
            name="eye-slash"
            size={20}
            style={{ bottom: -104, textAlign: "right", marginRight: 50 }}
          ></FontAwesome5>
          </View>
          <View style={{flexDirection:'row'}}>
              
   
          <TextInput
            style={styles.tii4}
            placeholder="Confirm Password"
            secureTextEntry
            value={passwordC}
            onChangeText={setPasswordC}
           
          ></TextInput>
          <FontAwesome5
            name="eye-slash"
            size={20}
            style={{ bottom: -124, textAlign: "right", marginRight: 50 }}
          ></FontAwesome5>
         </View>
          <View>
            <TouchableOpacity
              title="Sign Up"
              onPress={handleSignUp}
              style={styles.bbyyy}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  width: 260,
                  marginLeft: 10,
                  marginRight: 20,
                  marginBottom: 5,
                  marginTop: -6.5,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            <Text style={{ textAlign: "center", marginLeft:-22,bottom: -140, fontSize: 15 }}>
              Or
            </Text>
          </View>
          <View style={{ bottom:-40, marginLeft: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#F00",
                bottom: -120,
                borderRadius: 25,
                width: 300,
                height: 50,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  width: 260,
                  marginLeft: 30,
                  marginRight: 20,
                  bottom: -15,
                }}
              >
                Sign Up with Google
              </Text>
              <Fontisto
                name="google"
                size={20}
                color={"white"}
                style={{ bottom: 6, paddingLeft: 70 }}
              ></Fontisto>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={{
                backgroundColor: "#047FFF",
                bottom: -140,
                borderRadius: 25,
                width: 300,
                height: 50,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  width: 260,
                  marginLeft: 30,
                  marginRight: 20,
                 bottom:-15,
                }}
              >
                Sign Up with Facebook
              </Text>
              <EvilIcons name='sc-facebook' size={26} color={"#FFF" } style={{bottom:6, marginLeft:66} }></EvilIcons>
            </TouchableOpacity>
  
            <Text
              style={{ bottom: -200, textAlign: "center", marginLeft:-20 }}
              onPress={() => navigation.navigate("FSc2")}
            >
              Already have an account? Sign in
            </Text>
          </View>
        </View>
      </SafeAreaView>
   

     

    );
}
 export default FSc3;