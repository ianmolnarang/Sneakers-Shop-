import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import products from "../data/products";
const ProductsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Product Details")}
            style={styles.itemConatiner}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 1,
    width: "100%",
  },
  itemConatiner: {
    width: "50%",
    padding: 0,
  },
});

export default ProductsScreen;
