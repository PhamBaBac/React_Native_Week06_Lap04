import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import React from "react";

import { FlatList, Image, View } from "react-native";

const Home = () => {
  const product = [
    {
      image: require("../../../assets/ca_nau_lau.png"),
      name: "Ca Nau Lau",
      shop: "Nike",
    },
    {
      image: require("../../../assets/ga_bo_toi.png"),
      name: "Ga Bo Toi",
      shop: "Nike",
    },
    {
      image: require("../../../assets/xa_can_cau.png"),
      name: "Xe Can Cau",
      shop: "Nike",
    },
    {
      image: require("../../../assets/ca_nau_lau.png"),
      name: "Ca Nau Lau",
      shop: "Nike",
    },
    {
      image: require("../../../assets/ga_bo_toi.png"),
      name: "Ga Bo Toi",
      shop: "Nike",
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#E5E5E5",
      }}
    >
      <Text style={{ margin: 20, fontSize: 16 }}>
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
      </Text>
      <FlatList
        data={product}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff",
              marginVertical: 2,
              borderColor: "gray",
              borderWidth: 1,
            }}
          >
            <Image
              style={{ width: 100, height: 100, marginTop: 10 }}
              source={{ uri: item.image }}
            />
            <View style={{ flexDirection: "column", marginVertical: 10 }}>
              <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 10 }}>Shop: {item.shop}</Text>
            </View>
            <Pressable
              style={{
                width: 120,
                height: 40,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>Chat</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
