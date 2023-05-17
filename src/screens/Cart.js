import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    GET_COINS();
  }, []);

  const GET_COINS = async () => {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setCoins(data);

      console.log(data, "THIS IS MY RESPONSE");
    } catch (error) {
      console.log("ERROR: " + JSON.stringify(error));
    }
  };
  return (
    <View>
      <SafeAreaView />
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 70, height: 70 }}
              />

              <Text style={{ fontSize: 20, fontWeight: 500 }}>{item.name}</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
