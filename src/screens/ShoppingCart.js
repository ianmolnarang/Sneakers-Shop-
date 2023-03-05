import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";

const shoppingCartTotal = ()=>(
  <View style={styles.subtotalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>410,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>

      <Text style={styles.text}>+10,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Total</Text>

      <Text style={styles.textBold}>420,00 US$</Text>
    </View>
  </View>
);
const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppingCartTotal}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  subtotalContainer: {
    borderColor: "grey",
    borderTopWidth: 1,
    paddingTop: 10,
    margin: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "grey",
  },
  textBold: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#090909",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    alignSelf: "center",
  },
});

export default ShoppingCart;
