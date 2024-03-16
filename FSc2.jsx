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
    
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
  EvilIcons,
} from "@expo/vector-icons";

const FSc2 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("SignIng in with:", email, password);
    navigation.navigate("Home");
  };

  return (
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
            Welcome Back
          </Text>
        </View>

        <Text style={{ bottom: -20 }}>
          Fill in the from and create and account
        </Text>
        <View style={{flexDirection:'row'}}>

        <TextInput
          style={styles.tii}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <MaterialCommunityIcons
          name="email-outline"
          size={24}
          color={"black"}
          style={{ bottom: -65, textAlign: "right", marginRight: 50 }}
        ></MaterialCommunityIcons>
        </View>
        <View style={{flexDirection:'row'}}>
            
 
        <TextInput
          style={styles.tii5}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
         
        ></TextInput>
        <FontAwesome5
          name="eye-slash"
          size={20}
          style={{ bottom: -85, textAlign: "right", marginRight: 50 }}
        ></FontAwesome5>
       </View>
        <View>
          <TouchableOpacity
            title="Sign in"
            onPress={handleSignIn}
            style={styles.bby}
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
              Sign in with E-mail
            </Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "center", marginLeft:-22,bottom: -110, fontSize: 15 }}>
            Or
          </Text>
        </View>
        <View style={{ bottom:-40, marginLeft: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#F00",
              bottom: -100,
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
              Sign in with Google
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
               bottom:-15,
              }}
            >
              Sign in with Facebook
            </Text>
            <EvilIcons name='sc-facebook' size={26} color={"#FFF" } style={{bottom:6, marginLeft:66} }></EvilIcons>
          </TouchableOpacity>

          <Text
            style={{ bottom: -260, textAlign: "center",marginLeft:-20 }}
            onPress={() => navigation.navigate("FSc3")}
          >
            Don't have an account? Sign Up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FSc2;
