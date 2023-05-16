import {
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SimpleLineIcons, Ionicons, EvilIcons } from "@expo/vector-icons";

import { View, Text } from "react-native-animatable";

import { Switch } from "react-native-switch";

const w = Dimensions.get("window").width;
const adsJson = [
  {
    text: "Deal of the Day",
    icon: require("../constants/icons/adPic1.png"),
  },
  {
    text: "Top Rated Store",
    icon: require("../constants/icons/adPic2.png"),
  },
  {
    text: "Top Rated Store",
    icon: require("../constants/icons/adPic3.png"),
  },
];

const adsJson2 = [
  {
    text: "Deal of the Day",
    icon: require("../constants/icons/perfImg.png"),
    color: "yellow",
  },
  {
    text: "Top Rated Store",
    icon: require("../constants/icons/perfImg.png"),
    color: "green",
  },
  {
    text: "Top Rated Store",
    icon: require("../constants/icons/perfImg.png"),
    color: "cyan",
  },
];
const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const [toggle, setToggle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  // const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.root}>
      <SafeAreaView />
      {/* ------------------------------------------------------------------MEN SECTION-------------------------------------------- */}
      <View style={styles.menuSection}>
        <Pressable>
          <SimpleLineIcons name="menu" size={38} color="black" />
        </Pressable>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable>
            <Ionicons name="cart-outline" size={38} color="black" />
            <Text
              style={{
                position: "absolute",
                fontSize: 10,
                backgroundColor: "red",
                color: "white",
                padding: 5,
                alignItems: "center",
                borderRadius: 20,
                right: 0,
              }}
            >
              0
            </Text>
          </Pressable>

          <Pressable>
            <Ionicons
              name="notifications-outline"
              size={38}
              color="black"
              style={{
                marginHorizontal: 20,
              }}
            />
            <Text
              style={{
                position: "absolute",
                fontSize: 10,
                backgroundColor: "red",
                color: "white",
                padding: 5,
                alignItems: "center",
                borderRadius: 20,
                right: 20,
              }}
            >
              0
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("AllProducts")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              }}
              style={styles.pImg}
            />
          </Pressable>
        </View>
      </View>
      {/* ------------------------------------------------------------------HEADIMG SECTION-------------------------------------------- */}
      <View
        style={styles.headSection}
        animation={"slideInLeft"}
        duration={2000}
        useNativeDriver={false}
        iterationCount={3}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          Hi, Jenny Wilson
        </Text>

        <Text
          style={{
            fontSize: 10,
            color: "#7D7D7D",
            marginTop: 10,
          }}
        >
          What would you love to shop from us today?
        </Text>

        <View style={styles.searchBox}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search"
            placeholderTextColor={"#8D8D8D"}
          />
        </View>
      </View>
      {/* ------------------------------------------------------------------ads SECTION-------------------------------------------- */}
      <View>
        <FlatList
          data={adsJson}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: "#FAFAFA",
                marginRight: 30,
                paddingHorizontal: 30,
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 10,
                borderColor: "#E7E8E9",
                borderWidth: 1,
              }}
            >
              <Image
                source={item.icon}
                resizeMode="cover"
                style={{
                  width: 80,
                  height: 80,
                  marginRight: 10,
                }}
              />
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </View>
      <View>
        <FlatList
          data={adsJson2}
          horizontal
          snapToAlignment="center"
          snapToInterval={w * 0.9}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          // ------------------------------FOR PAGE INDICATOR()----------------------------------
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={16}
          // ref={slidesRef}
          // ------------------------------TO HERE------------------------------
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: item.color,
                height: 170,
                width: w * 0.9,
                borderRadius: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <View style={{ paddingVertical: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: 700, color: "white" }}>
                  Mens
                </Text>
                <Text style={{ fontSize: 40, fontWeight: 700, color: "white" }}>
                  Perfume
                </Text>
              </View>
              <Image
                source={item.icon}
                resizeMode="contain"
                style={{
                  width: 150,
                  height: 140,
                  position: "absolute",
                  right: 20,
                  bottom: 0,
                }}
              />
            </View>
          )}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          {adsJson2.map((e, i) => (
            <View
              style={{
                backgroundColor: currentIndex === i ? "#E74A03" : "#FFDBD0",
                height: 15,
                width: 15,
                borderRadius: 15,
                marginHorizontal: 5,
              }}
            />
          ))}
        </View>
      </View>
      <View>
        <Switch
          value={toggle}
          onValueChange={(val) => {
            setToggle((prev) => !prev);
          }}
          disabled={false}
          activeText={"On"}
          inActiveText={"Off"}
          circleSize={30}
          barHeight={30}
          circleBorderWidth={3}
          backgroundActive={"#FFDBD0"}
          backgroundInactive={"gray"}
          circleActiveColor={"#E74A03"}
          circleInActiveColor={"#E74A03"}
          // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
          changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
          innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
          outerCircleStyle={{}} // style for outer animated circle
          renderActiveText={false}
          renderInActiveText={false}
          switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
          switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
          switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
          switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: "5%",
  },
  menuSection: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pImg: {
    width: 50,
    height: 50,
    borderRadius: 26,
    backgroundColor: "grey",
  },
  headSection: {
    // backgroundColor: "cyan",
    marginTop: 25,
  },
  searchBox: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E7E8E9",
    marginTop: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});
