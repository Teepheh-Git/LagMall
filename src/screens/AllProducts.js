import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useMemo, useCallback, useRef } from "react";
import {
  SimpleLineIcons,
  Ionicons,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";
// import BottomSheet from "@gorhom/bottom-sheet";

const w = Dimensions.get("window").width;

const AllProducts = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    //    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.root}>
      <SafeAreaView />
      {/*-------------------- HEADER  ------------------------------------ */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="arrow-back" size={34} color="#FF6F61" />
        </Pressable>
        <Text style={{ fontSize: 30, fontWeight: 700, marginLeft: 20 }}>
          Nike Shoes
        </Text>
      </View>

      {/*-------------------- SEARCH  ------------------------------------ */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.searchBox}>
          <EvilIcons name="search" size={34} color="#D9D9D9" />
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder=" Nike Shoes"
            placeholderTextColor={"#8D8D8D"}
          />
        </View>
        <Pressable
          style={{
            width: "15%",
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#E7E8E9",
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>F</Text>
        </Pressable>
      </View>

      {/*-------------------- SHOES FLATLIST  ------------------------------------ */}

      <FlatList
        data={[1, 2, 3, 4, 5]}
        numColumns={2}
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<View style={{ marginBottom: 200 }} />}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: w * 0.46,
              height: 300,
              backgroundColor: "#FFFFFF",
              marginBottom: 10,
              borderRadius: 20,
              overflow: "hidden",
              //   shadowColor: "#000",
              //   shadowOffset: {
              //     width: 0,
              //     height: 0,
              //   },
              //   shadowOpacity: 0.29,
              //   shadowRadius: 4.65,
              //   elevation: 7,
            }}
          >
            <View
              style={{
                backgroundColor: "#F4F2F2",
                height: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-womens-shoes-L3Tqlr.png",
                }}
                style={{
                  width: 150,
                  height: 150,
                }}
              />
            </View>
            <View
              style={{
                width: w * 0.46,
                height: 150,
                backgroundColor: "#FFFFFF",
                padding: 15,
              }}
            >
              <Text style={{ fontSize: 14 }}>Nike Sneakers, 43 -46</Text>
              <Text style={{ fontSize: 18, fontWeight: 900, marginTop: 10 }}>
                N120,000
              </Text>

              <View style={{ flexDirection: "row", marginTop: 10 }}>
                {[1, 2, 3, 4, 5].map((e, i) => (
                  <View>
                    <FontAwesome
                      name={i === 4 ? "star-half-empty" : "star"}
                      size={14}
                      color="#FB8200"
                    />
                  </View>
                ))}

                <Text style={{ marginLeft: 10, color: "#5E6366" }}>4.99</Text>
              </View>
              <Pressable
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#E74A03",
                  position: "absolute",
                  bottom: 10,
                  alignSelf: "center",
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="md-cart-outline" size={20} color="white" />
                <Text style={{ color: "white", marginLeft: 10 }}>
                  Add to cart
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      />

      {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet> */}
    </View>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  searchBox: {
    width: "80%",
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
