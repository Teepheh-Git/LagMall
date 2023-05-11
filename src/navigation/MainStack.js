import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

const Mainstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Mainstack;
