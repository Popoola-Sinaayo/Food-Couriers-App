import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React from "react";
import HeaderTopNav from "../components/HeaderTopNav";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { Icon } from "@rneui/base";
import CartItem from "../components/CartItem";
import MenuPhoto from "../assets/MenuPhoto.png";
import BottomNav from "../components/BottomNav";

const MealMenu = () => {
  return (
    <View>
      <ScrollView style={{ marginBottom: 80 }} showsVerticalScrollIndicator={false}>
        <HeaderTopNav />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Meal Menu</Text>
        </View>
        <View style={styles.inputTextContainer}>
          <TextInput
            style={[styles.topTextInput, styles.textInputPlaceholder]}
            placeholder="Search"
          >
            {/* <Text style={styles.textInputPlaceholder}>Search</Text>{" "} */}
          </TextInput>
          <View style={styles.searchIcon}>
            <Icon name="search-outline" type="ionicon" size={30} />
          </View>
        </View>
        <View style={styles.mealContainer}>
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
          <CartItem
            title="Chicken Burger"
            description="Burger Factory LTD"
            price="20"
            image={MenuPhoto}
          />
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
};

export default MealMenu;

const styles = StyleSheet.create({
  headerTextContainer: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: 700,
  },
  inputTextContainer: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    position: "relative",
  },
  topTextInput: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#FFDFDF",
    borderColor: "#FFDFDF",
    padding: 15,
    paddingLeft: 80,
  },
  searchIcon: {
    position: "absolute",
    top: 8,
    left: 40,
  },
  textInputPlaceholder: {
    fontWeight: "500",
    fontSize: 15,
    color: "black",
  },
  mealContainer: {
    marginTop: 10,
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
});
