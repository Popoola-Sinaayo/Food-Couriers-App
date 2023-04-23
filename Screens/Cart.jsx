import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderTopNav from "../components/HeaderTopNav";
import {
  responsiveHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import MenuPhoto from "../assets/MenuPhoto.png";
import CartItem from "../components/CartItem";
import cartSummaryBg from "../assets/cart-summary-bg.png";

const Cart = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={styles.bodyContainer}>
        <HeaderTopNav isNotNotification={true} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Order Details</Text>
        </View>
        <View style={styles.cartContainer}>
          <CartItem
            title="Chicken Burger"
            description="Burger Factory LTD"
            price="20"
            image={MenuPhoto}
          />
          <CartItem
            title="Chicken Burger"
            description="Burger Factory LTD"
            price="20"
            image={MenuPhoto}
          />
          <CartItem
            title="Chicken Burger"
            description="Burger Factory LTD"
            price="20"
            image={MenuPhoto}
          />
          <CartItem
            title="Chicken Burger"
            description="Burger Factory LTD"
            price="20"
            image={MenuPhoto}
          />
          <CartItem
            title="Chicken Burger"
            description="Burger Factory LTD"
            price="20"
            image={MenuPhoto}
          />
        </View>
      </ScrollView>
      <View style={styles.lowerContainer}>
        <View style={styles.cartSummary}>
          <Image source={cartSummaryBg} style={styles.cartSummaryBg} />
          <View style={styles.cartSummaryTextContainer}>
            <Text style={styles.cartSummaryText}>Sub-Total</Text>
            <Text style={styles.cartSummaryText}>100 $</Text>
          </View>
          <View style={styles.cartSummaryTextContainer}>
            <Text style={styles.cartSummaryText}>Delivery Charge</Text>
            <Text style={styles.cartSummaryText}>10 $</Text>
          </View>
          <View style={styles.cartSummaryTextContainer}>
            <Text style={styles.cartSummaryText}>Discount</Text>
            <Text style={styles.cartSummaryText}>10 $</Text>
          </View>
          <View style={styles.cartSummaryTextTotalContainer}>
            <Text style={styles.cartSummaryTextTotal}>Total</Text>
            <Text style={styles.cartSummaryTextTotal}>110$</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonTextContainer}
            onPress={() => navigation.navigate("OrderCompleted")}
          >
            <Text style={styles.buttonText}>Place My Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  bodyContainer: {
    height: responsiveHeight(70),
  },
  lowerContainer: {
    height: responsiveHeight(30),
    backgroundColor: "transparent",
  },
  cartSummary: {
    width: responsiveScreenWidth(90),
    height: "90%",
    alignSelf: "center",
    backgroundColor: "rgb(214, 19, 85)",
    borderRadius: 7,
    position: "relative",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  cartSummaryTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
  },
  cartSummaryTextTotalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  cartSummaryBg: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  cartSummaryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  cartSummaryTextTotal: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  headerTextContainer: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: 700,
  },
  cartContainer: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
    marginTop: 30,
  },
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
  buttonText: {
    color: "#D61355",
    textAlign: "center",
  },
  buttonTextContainer: {
    borderRadius: 7,
    backgroundColor: "white",
    paddingVertical: 10,
  },
});
