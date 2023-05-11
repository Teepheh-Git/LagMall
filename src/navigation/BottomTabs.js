import React from "react";

import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import WishList from "../screens/WishList";
import Profile from "../screens/Profile";
import { Feather, AntDesign, Ionicons, Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          paddingHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={{ alignItems: "center" }}>
                <Octicons name="home" size={24} color="#E74A03" />
                <Text style={{ color: "#E74A03" }}>Home</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center" }}>
                <Octicons name="home" size={24} color="black" />
                <Text style={{ color: "black" }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen component={Cart} name="Cart" />
      <Tab.Screen component={WishList} name="WishList" />
      <Tab.Screen component={Profile} name="Profile" />
    </Tab.Navigator>
  );
};

export default BottomTabs;
