import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Mainstack from "./src/navigation/MainStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Splashscreen from "./src/components/Splashscreen";
import { useEffect, useState } from "react";

export default function App() {
  const [shown, setShown] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShown(false);
    }, 1000);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Mainstack />
      </NavigationContainer>

      {/* <Splashscreen /> */}
      {shown && <Splashscreen />}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
