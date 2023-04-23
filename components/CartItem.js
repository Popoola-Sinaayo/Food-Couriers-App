import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const CartItem = ({ title, description, price, image }) => {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cartItem}>
        <Image source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>$ {price}</Text>
        </View>
        <View style={styles.cartModifier}>
          <TouchableOpacity style={styles.minusButtonContainer}>
            <Text style={styles.minusButton}>-</Text>
          </TouchableOpacity>
          <View style={styles.quantity}>
            <Text>1</Text>
          </View>
          <TouchableOpacity style={styles.plusButtonContainer}>
            <Text style={styles.plusButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  description: {
    fontSize: 17,
    fontWeight: "500",
    opacity: 0.5,
  },
  price: {
    fontWeight: "700",
    fontSize: 21,
    color: "#D61355",
  },
  cartModifier: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 95,
  },
  minusButton: {
    color: "#D61355",
  },
  minusButtonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    backgroundColor: "rgba(214, 19, 85, 0.1)",
    borderRadius: 8,
  },
  plusButton: {
    color: "white",
  },
  plusButtonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    backgroundColor: "#D61355",
    borderRadius: 8,
  },
  quantity: {
    paddingTop: 5,
  },
});
