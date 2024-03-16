import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput
} from "react-native";
import { styles } from "../styles";
import React, { useState } from "react";
import CATEGORIES from "../config/CATEGORIES";
import COLORS from "../config/COLORS";
import TOURS from "../config/TOURS";
import ADVANTURES from "../config/ADVANTURES";
import SPACING from "../config/SPACING";
import Ionicons from "@expo/vector-icons/Ionicons";
  
import {
    AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Fontisto,
  EvilIcons,
} from "@expo/vector-icons";
const WIDTH = Dimensions.get("screen").width;

const HomeScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const handle = () => {
   
    navigation.navigate("TourDetailScreen" , TOURS);
  };
  return (
    <SafeAreaView style={{backgroundColor:'#FFF'}}>
      <ScrollView>
      <View style={{ padding: SPACING * 2 }}>
        <View

          style={{
            flexDirection:'row',
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SPACING * 3,
              fontWeight: "bold",
              color: COLORS.dark,
            }}
          >
            Discover
          </Text>
          <Image
            style={{
              
              height: SPACING * 5,
              width: SPACING * 5,
              borderRadius: SPACING * 5,
            }}
            source={require("../assets/images/Avatar.jpg")}
          />
        </View>
        <View style={{flexDirection:'row',padding: SPACING / 3 }}>

<TextInput
  style={styles.tii7}
  placeholder="Search"
  
></TextInput>
<AntDesign
  name="search1"
  size={24}
  color={"black"}
  style={{ bottom: -30, textAlign: "left", marginRight: 50 ,paddingBottom:50 }}
></AntDesign>
</View>
        <ScrollView style={{ marginVertical: SPACING * 2 }} horizontal>
          {CATEGORIES.map((category, index) => (
            <TouchableOpacity
              onPress={() => setActiveCategory(index)}
              style={{ marginRight: SPACING }}
              key={category.id}
            >
              <Text
                style={[
                  { fontSize: SPACING * 2, color: COLORS.dark },
                  activeCategory === index && { color: COLORS.primary },
                ]}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={WIDTH * 0.7}
          decelerationRate="fast"
          pagingEnabled
          style={{ marginVertical: SPACING * 2 }}
        >
          {CATEGORIES[activeCategory].tours.map((tour, index) => (
            <TouchableOpacity
              style={{
                width:150  ,
                height: 190 ,
                overflow: "hidden",
                borderRadius: SPACING * 2,
                marginRight: SPACING * 2,
              }}
              key={index}
              onPress={handle}
            >
              <View
                style={{
                  position: "absolute",
                  zIndex: 1,
                  height: "100%",
                  width: "100%",
                  backgroundColor: COLORS.transparent,
                  justifyContent: "space-between",
                  padding: SPACING,
                }}
              >
                <TouchableOpacity
                  style={{
                    alignSelf: "flex-end",
                    padding: SPACING / 1.5,
                    backgroundColor: '#047FFF',
                    borderRadius: SPACING * 5,
                    justifyContent: "center",
                    alignItems: "center",
                    

                  }}
                  
                >
                  <FontAwesome
                    name="heart"
                    color={'#FFF'}
                    size={17}
                    
                  />
                </TouchableOpacity>
                <Text
                  style={{
                   
                    fontSize:14,
                    color: COLORS.white,
                    fontWeight: "700",
                    marginLeft: 10,
                   
                  }}
                >
                  {tour.title}
                </Text>
              </View>
              <Image
                source={tour.image}
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SPACING * 2,
              fontWeight: "bold",
              color: COLORS.dark,
            }}
          >
            Best Hotels
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: SPACING * 1.4,
                fontWeight: "500",
                color: COLORS.primary,
              }}
            >
              Show all
            </Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={WIDTH * 0.7}
          decelerationRate="fast"
          pagingEnabled
          style={{ marginVertical: SPACING * 2 }}
        >
          {CATEGORIES[activeCategory].tours.map((tour, index) => (
            <TouchableOpacity
              style={{
                width:150 ,
                height: 190 ,
                overflow: "hidden",
                borderRadius: SPACING * 2,
                marginRight: SPACING * 2,
              }}
              key={index}
              onPress={handle}
            >
              <View
                style={{
                  position: "absolute",
                  zIndex: 1,
                  height: "100%",
                  width: "100%",
                  backgroundColor: COLORS.transparent,
                  justifyContent: "space-between",
                  padding: SPACING,
                }}
              >
                <TouchableOpacity
                  style={{
                    alignSelf: "flex-end",
                    padding: SPACING / 1.5,
                    backgroundColor: '#047FFF',
                    borderRadius: SPACING * 5,
                    justifyContent: "center",
                    alignItems: "center",

                  }}
                  
                >
                  <FontAwesome
                    name="heart"
                    color={'#FFF'}
                    size={ 17}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    color: COLORS.white,
                    fontWeight: "700",
                    marginLeft: SPACING,
                  }}
                >
                  {tour.title}
                </Text>
              </View>
              <Image
                source={tour.image}
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
         
          
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


