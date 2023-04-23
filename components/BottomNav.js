import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, withBadge } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const BottomNav = () => {
  const navigation = useNavigation();
  const BadgedCartIcon = withBadge(7)(Icon);
  const BadgedChatIcon = withBadge()(Icon);
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.homeNav}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="home" size={30} color="#FF0000" />
        <Text style={styles.homeNavText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Icon name="person" type="ionicon" size={30} color="#FF0000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <BadgedCartIcon name="cart" type="ionicon" size={30} color="#FF0000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <BadgedChatIcon
          name="chatbubble-ellipses"
          type="ionicon"
          size={30}
          color="#FF0000"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: responsiveScreenWidth(100),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: responsiveScreenHeight(10),
    paddingHorizontal: 10,
  },

  homeNav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2BFBF",
    padding: 10,
    width: 100,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  homeNavText: {
    fontWeight: "500",
  },
});
