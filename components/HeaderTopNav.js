import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import topLoginImage from "../assets/background.png";
import { Icon } from "@rneui/themed";
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";

const HeaderTopNav = ({ isNotNotification }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={topLoginImage} style={styles.topImage} />
      </View>
      <View style={styles.topNav}>
        <TouchableOpacity
          style={styles.iconButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <View>
            <Icon
              name="chevron-back-outline"
              type="ionicon"
              color="#FF0000"
              size={35}
              style={styles.iconButton}
            />
          </View>
        </TouchableOpacity>
        {!isNotNotification && (
          <TouchableOpacity style={styles.iconButtonContainer}>
            <View>
              <Icon
                name="notifications-outline"
                type="ionicon"
                color="#FF0000"
                size={35}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderTopNav;

const styles = StyleSheet.create({
  imageContainer: {
    width: responsiveScreenWidth(100),
    position: "absolute",
    left: responsiveScreenWidth(10),
  },
  topImage: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(30),
    opacity: 0.2,
  },
  topNav: {
    paddingTop: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: responsiveScreenWidth(90),
    alignSelf: "center",
    height: responsiveScreenHeight(15),
  },
  iconButtonContainer: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 8,
  },
});
