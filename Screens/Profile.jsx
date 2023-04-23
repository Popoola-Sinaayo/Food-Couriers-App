import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  SafeAreaView,
} from "react-native";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import React, { useState } from "react";
import topLoginImage from "../assets/background.png";
import editIcon from "../assets/tabler_edit.png";
import backButton from "../assets/customBackButton.png";
import NotificationIcon from "../assets/svg/Notification";
import avatar from "../assets/avatar.png";
import { Icon } from "@rneui/themed";
import notificationButton from "../assets/notifiaction.png";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import HeaderTopNav from "../components/HeaderTopNav";

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
      <ScrollView>
        <HeaderTopNav />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.mainProfile}>
          <View>
            <View style={styles.avatarContainer}>
              <Image source={avatar} style={styles.avatar} />
              <TouchableOpacity>
                <Image source={editIcon} style={styles.editIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headerFormTextContainer}>
            <Text style={styles.headerFormText}>Personal Info</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formDetails}>
              <Text style={styles.formTextTitle}>Your Name</Text>
              <Text style={styles.formTextDetails}>Joyce Johnson</Text>
            </View>
            <View style={styles.formDetails}>
              <Text style={styles.formTextTitle}>Occupation</Text>
              <Text style={styles.formTextDetails}>Manager</Text>
            </View>
            <View style={styles.formDetails}>
              <Text style={styles.formTextTitle}>Employer</Text>
              <Text style={styles.formTextDetails}>Food Couriers</Text>
            </View>
            <View style={styles.formDetails}>
              <Text style={styles.formTextTitle}>Nigeria</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#D61355" }}
                thumbColor={isEnabled ? "white" : "white"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              {/* <Text style={styles.formTextDetails}></Text> */}
            </View>
          </View>
          <View style={styles.headerFormTextContainer}>
            <Text style={styles.headerFormText}>Contact Info</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formDetails}>
              <Text style={styles.formTextTitle}>Phone</Text>
              <Text style={styles.formTextDetails}>+234 813 4783 349</Text>
            </View>
            <View style={styles.formDetails}>
              <Text style={styles.formTextTitle}>Email</Text>
              <Text style={styles.formTextDetails}>ekamcy@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButtonTextContainer}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imageContainer: {
    width: responsiveScreenWidth(100),
    position: "absolute",
    left: responsiveScreenWidth(10),
  },
  topImage: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(30),
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
    backgroundColor: "#FBACAC",
    padding: 10,
    borderRadius: 8,
  },
  headerTextContainer: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: 700,
  },
  headerFormText: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
  },
  mainProfile: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
  avatarContainer: {
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: "#FFDFDF",
    padding: 15,
    borderRadius: 80,
  },
  avatar: {
    padding: 20,
  },
  editIcon: {
    position: "absolute",
    right: 0,
    bottom: -10,
    width: 40,
    height: 40,
  },
  formContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  formTextTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#3B3B3B",
  },
  formTextDetails: {
    fontSize: 18,
    fontWeight: 500,
  },
  formDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  headerFormTextContainer: {
    marginTop: 30,
  },
  editButtonTextContainer: {
    width: responsiveScreenWidth(90),
    borderRadius: 10,
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 60,
    paddingLeft: 60,
    backgroundColor: "#D61355",
    marginTop: 30,
  },
  editButtonText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: 700,
  },
});
