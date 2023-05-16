import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import { nanoid } from "nanoid";
import { customAlphabet } from "nanoid/non-secure";
import { AntDesign } from "@expo/vector-icons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

const ProductDetails = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#255763",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#0e1626",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70",
        },
      ],
    },
  ];

  const tabOptions = [
    {
      title: "Details",
      view: (
        <>
          <Text>This is the details</Text>
        </>
      ),
    },
    {
      title: "Reviews",
      view: (
        <>
          <Text>This is the revievs</Text>
        </>
      ),
    },
    {
      title: "Vendors Details",
      view: (
        <>
          <Text>This is the Vendors Details</Text>
        </>
      ),
    },
  ];

  const progressJSON = [
    {
      time: "8:04am",
      desc: "Rider is on his way",
      fufilled: true,
    },
    {
      time: "9:04am",
      desc: "Order is being prepared",
      fufilled: false,
    },
    {
      time: "10:04am",
      desc: "Order Confirmed",
      fufilled: false,
    },
  ];

  return (
    <View style={styles.root}>
      <SafeAreaView />
      <Text>ProductDetails</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {tabOptions.map((e, i) => (
          <Pressable key={nanoid()} onPress={() => setSelectedTabIndex(i)}>
            <Text
              style={{
                fontSize: 20,
                color: i === selectedTabIndex ? "#554455" : "#C0C0C1",
              }}
            >
              {e.title}
            </Text>
            {i === selectedTabIndex && (
              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  bottom: -15,
                }}
              >
                •
              </Text>
            )}
          </Pressable>
        ))}
      </View>
      <View>{tabOptions[selectedTabIndex].view}</View>

      <View>
        {progressJSON.map((e, i) => (
          <View key={nanoid()}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 80,
              }}
            >
              {e.fufilled ? (
                <Text style={{ color: "#07DE10", fontSize: 30 }}>●</Text>
              ) : (
                <AntDesign name="checkcircleo" size={30} color="#07DE10" />
              )}
              <View style={{ marginLeft: 20 }}>
                <Text>8: 25 am</Text>
                <Text>Rider is on his way</Text>
              </View>
            </View>

            {progressJSON.length - 1 !== i && (
              <View
                style={{
                  position: "absolute",
                  height: 75,
                  width: 3,
                  backgroundColor: "#07DE10",
                  top: 35,
                  left: 13,
                }}
              />
            )}
          </View>
        ))}
      </View>

      <View style={{ width: "100%", height: 300 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: 6.6431,
            longitude: 3.3086,
            latitudeDelta: 0.1234,
            longitudeDelta: -0.5678,
          }}
          style={{ width: "100%", height: 300 }}
        />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
