import React from "react";
import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: 'white' } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ fontWeight: "500", marginLeft: 5 }}>1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
          animationEnabled={true}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
