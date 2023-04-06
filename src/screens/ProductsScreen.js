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
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productSlice";
const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch() ; 
  const products = useSelector((state) => state.products.products);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>{
             //update selected products 
             
               dispatch(productsSlice.actions.setSelectedProduct(item.id)) ;
               

               navigation.navigate("Product Details")}}
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
