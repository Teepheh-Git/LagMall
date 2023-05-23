import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./BottomTabs";
import { Text, View } from "react-native-animatable";
import { SafeAreaView } from "react-native";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const CustomDrawerContent = () => {
    return (
      <View
        style={{
          backgroundColor: "orange",
        }}
      >
        <SafeAreaView />
        <Text>This is my custom drawer</Text>
      </View>
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "left",
        drawerType: "front",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
