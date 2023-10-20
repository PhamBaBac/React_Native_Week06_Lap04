import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import home from "../screen/home/home";
import listProduct from "../screen/home/listProduct";

import { View, Text, Image, Pressable, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#fff",
        tabBarIcon: ({ focused, color, }) => {
          let iconImage;

          if (route.name === "Home") {
            iconImage = focused ? "home" : "home-outline";
          } else if (route.name === "Products") {
            iconImage = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconImage} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        inactiveTintColor: "#000",
        activeBackgroundColor: "#1BA9FF",
        inactiveBackgroundColor: "#1BA9FF",
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          headerLeft: () => (
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Pressable>
                <Image
                  source={require("../../assets/back.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    marginHorizontal: 20,
                  }}
                />
              </Pressable>
            </View>
          ),
          headerRight: () => (
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Pressable>
                <Image
                  source={require("../../assets/cart.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    marginHorizontal: 20,
                  }}
                />
              </Pressable>
            </View>
          ),
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Chat
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#1BA9FF",
          },
        }}
      />
      <Tab.Screen
        name="Products"
        component={listProduct}
        options={{
          headerLeft: () => (
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Pressable>
                <Image
                  source={require("../../assets/back.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    marginHorizontal: 20,
                  }}
                />
              </Pressable>
            </View>
          ),
          headerRight: () => (
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Pressable>
                <Image
                  source={require("../../assets/cart.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={require("../../assets/dots.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    marginHorizontal: 20,
                  }}
                />
              </Pressable>
            </View>
          ),
          headerTitleAlign: "center",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                height: 40,
                width: 200,
                borderRadius: 10, // Add border radius to round the container
                paddingLeft: 40,
              }}
            >
              <Image
                source={require("../../assets/search.png")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "gray",
                  position: "absolute",
                  left: 10,
                }}
              />
              <TextInput
                placeholder="Search..."
                style={{ width: 150, fontSize: 18, color: "gray" }}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: "#1BA9FF",
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigation;
