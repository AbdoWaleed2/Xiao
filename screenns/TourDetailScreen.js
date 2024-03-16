import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import TOURS from "../config/TOURS";
import React from "react";
import COLORS from "../config/COLORS";
import SPACING from "../config/SPACING";
import {Ionicons, FontAwesome }from "@expo/vector-icons";
import  {
  HeaderBackButton
} from '@react-navigation/elements';
const TourDetailScreen = () => {
  
  return (
    <>
      <ScrollView>
       
        <ImageBackground
          source={TOURS.image}
          style={{ width: "100%", height: 400 }}
        >
          <SafeAreaView>
            <View
              style={{
                paddingHorizontal: SPACING,
                justifyContent: "space-between",
                flexDirection: "row",
                height: "100%",
              }}
            >
              
              <View
                style={{
                  
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  paddingBottom: SPACING * 8,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: '#047FFF',
                    width: SPACING * 4,
                    height: SPACING * 4,
                    borderRadius: SPACING * 2,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft:300,
                    top:20,
                  }}
                >
                  <FontAwesome
                    name="heart"
                    color={'#FFF'}
                    size={17}
                  />
                </TouchableOpacity>
               
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SPACING * 2,
            borderRadius: SPACING * 3,
            bottom: SPACING * 3,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: SPACING * 2,
                fontWeight: "bold",
                color: COLORS.dark,
              }}
            >
              {TOURS.title}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: "bold",
                  color: COLORS.dark,
                }}
              >
                {TOURS.price}
              </Text>
              <Text></Text>
            </View>
          </View>
          <View style={{ marginVertical: SPACING * 2}}>
            <View style={{ flexDirection: "row", marginBottom: SPACING * 2 }}>
              <TouchableOpacity
                style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: "bold",
                    fontSize: SPACING * 1.7,
                  }}
                >
                  Overview
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
              >
                <Text>Details</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
              >
                <Text>Reviews</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: SPACING * 2, flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    shadowColor: COLORS.dark,
                    shadowOffset: { width: SPACING / 2, height: SPACING },
                    shadowRadius: SPACING / 2,
                    shadowOpacity: 0.1,
                    padding: SPACING / 2,
                    borderRadius: SPACING / 2,
                    marginRight: SPACING,
                  }}
                >
                  <Ionicons
                    name="time"
                    size={SPACING * 3}
                    color={COLORS.primary}
                  />
                </View>
                <View style={{ marginRight: SPACING * 2 }}>
                  <Text
                    style={{
                      fontSize: SPACING + 1,
                      marginBottom: SPACING / 2,
                      textTransform: "uppercase",
                    }}
                  >
                    Duration
                  </Text>
                  <Text style={{ fontSize: SPACING * 1.6, fontWeight: "700" }}>
                    {TOURS.duration}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    shadowColor: COLORS.dark,
                    shadowOffset: { width: SPACING / 2, height: SPACING },
                    shadowRadius: SPACING / 2,
                    shadowOpacity: 0.1,
                    padding: SPACING / 2,
                    borderRadius: SPACING / 2,
                    marginRight: SPACING,
                  }}
                >
                 
                </View>
                <View style={{ marginRight: SPACING * 2 }}>
                  
                  
                </View>
               
              </View>

             
            </View>
            <View>
              <Text style={{ color: COLORS.dark }}>{TOURS.description}</Text>
            </View>
          </View>
          <View  style={{ marginRight: SPACING * 2 }} >
                <TouchableOpacity
      
      style={{
        backgroundColor: COLORS.primary,
        padding: 10,
        marginHorizontal: SPACING * 9,
        borderRadius: SPACING * 4,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: SPACING,
          fontWeight: "bold",
          marginRight: SPACING * 4,
          marginLeft: SPACING * 4,
        }}
      >
        Book Now
      </Text>
     
    </TouchableOpacity>
    
                </View>
        </View>
        
      </ScrollView>
      <View
        style={{ position: "absolute", bottom: SPACING * 2, width: "100%" }}
      >
       
      </View>
    </>
  );
};

export default TourDetailScreen;
