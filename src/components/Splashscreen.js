import { ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { View } from "react-native-animatable";

const Splashscreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/splash_bg.png")}
      style={{
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        animation={"tada"}
        useNativeDriver={false}
        duration={3000}
        // direction="alternate"
        iterationCount={"infinite"}
      >
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={{
            width: 250,
            height: 50,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({});
