import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import topImage from "../assets/order-complete-bg.png";
import {
  responsiveHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import dotImage from "../assets/dotImage.png";
import successIcon from "../assets/successIcon.png";
import starRating from "../assets/starRating.png";
import editIcon from "../assets/editIcon.png";
import { Icon } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";

const OrderCompleted = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" && "padding"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ backgroundColor: "#FEFEFF" }}>
        <View style={styles.topImageContainer}>
          <Image source={topImage} style={styles.topImage} />
        </View>
        <View style={styles.midImageContainer}>
          <Image source={dotImage} style={styles.dotImage} />
          <Image source={successIcon} style={styles.successIcon} />
        </View>
        <View>
          <Text style={styles.textHeader}>Thank You!</Text>
          <Text style={styles.textHeader}>Order Completed</Text>
          <Text style={styles.textDescripion}>
            Please rate your last driver{" "}
          </Text>
        </View>
        <View>
          <Image source={starRating} style={styles.starRating} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Leave Feedback" />
          <Image source={editIcon} style={styles.editIcon} />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate("MealMenu")}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate("MealMenu")}
          >
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  topImageContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveHeight(60),
  },
  topImage: {
    width: "100%",
    height: "80%",
  },
  midImageContainer: {
    position: "absolute",
    top: responsiveHeight(35),
    left: responsiveScreenWidth(26),
  },
  dotImage: {},
  successIcon: {
    position: "absolute",
    width: 200,
    height: 200,
    left: -10,
  },
  textHeader: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 28,
  },
  textDescripion: {
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "500",
    fontSize: 17,
    color: "#3B3B3B",
    opacity: 0.3,
  },
  starRating: {
    width: responsiveScreenWidth(80),
    height: 30,
    alignSelf: "center",
  },
  inputContainer: {
    position: "relative",
    width: responsiveScreenWidth(90),
    alignSelf: "center",
    marginVertical: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#F6F6F6",
    paddingVertical: 20,
    paddingLeft: 50,
    zIndex: -1,
  },
  editIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 30,
    height: 30,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
  submitButton: {
    width: responsiveScreenWidth(55),
    backgroundColor: "#D61355",
    paddingVertical: 10,
    borderRadius: 7,
  },
  submitButtonText: {
    textAlign: "center",
    color: "white",
  },
  skipButton: {
    width: responsiveScreenWidth(30),
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  skipButtonText: {
    textAlign: "center",
  },
});
