import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import AllProducts from "../screens/AllProducts";
import ProductDetails from "../screens/ProductDetails";

const Stack = createStackNavigator();

const Mainstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default Mainstack;
