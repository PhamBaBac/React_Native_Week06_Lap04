import { SafeAreaView, Text } from "react-native";
import React from "react";
import { FlatList, Image, View } from "react-native";

const ListProduct = () => {
  const DetailProduct = [
    {
      image: require("../../../assets/giacchuyen_1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      price: 100000,
      voucher: "-10%",
    },
    {
      image: require("../../../assets/daynguon_1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      price: 100000,
      voucher: "-10%",
    },
    {
      image: require("../../../assets/dauchuyendoipsps2_1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      price: 100000,
      voucher: "-10%",
    },
    {
      image: require("../../../assets/dauchuyendoi_1.png"),
      name: "Cáp chuyển từ CổngUSB sang PS2...",
      star: 4,
      price: 100000,
      voucher: "-10%",
    },
    {
      image: require("../../../assets/carbusbtops2_1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      price: 100000,
      voucher: "-10%",
    },
    {
      image: require("../../../assets/daucam_1.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      star: 4,
      price: 100000,
      voucher: "-10%",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push('★');
      } else {
        stars.push('✰'); 
      }
    }
    return (
      <Text style={{ color: 'gold', fontSize: 20 }}>{stars.join(' ')}</Text>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#E5E5E5",
      }}
    >
      <FlatList
        numColumns={2}
        data={DetailProduct}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              borderColor: "gray",
              borderWidth: 1,
              marginHorizontal: 4,
              marginVertical: 4,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",

                marginVertical: 10,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flex: 1, alignItems: 'center'}}>
                <Image
                  style={{ width: 160, height: 100, resizeMode: 'contain' }}
                  source={{ uri: item.image }}
                />
              </View>
              <Text style={{ fontWeight: "bold", marginVertical: 10 }}>
                {item.name}
              </Text>
              {renderStars(item.star)}
              <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <Text style={{fontWeight: 'bold'}}>{item.price}</Text>
                <Text style={{ marginHorizontal: 10 }}>{item.voucher}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ListProduct;
