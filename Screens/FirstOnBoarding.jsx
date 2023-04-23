import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import topPattern from "../assets/Pattern.png";
import mainImage from "../assets/Illustartion.png";
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";
import Arrow from "../assets/svg/Arrow";
import CenterCircle from "../assets/svg/CenterCircle";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const FirstOnBoarding = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View>
          <Image source={topPattern} style={styles.topImage} />
        </View>
        <View>
          <Image source={mainImage} style={styles.mainImage} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Select The</Text>
          <Text style={styles.title}>Favourites Menu</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>
            Now eat well, don't leave the house,You can
          </Text>
          <Text style={styles.subTitle}>
            choose your favorite food only with
          </Text>
          <Text style={styles.subTitle}>one click</Text>
        </View>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                  navigation.navigate("SecondOnBoarding")
        }}>
          <LinearGradient style={styles.button} colors={["#D61355", "#FF0000"]}>
            <Text style={styles.buttonText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.footerText}>
          <Text>Skip</Text>
          <CenterCircle />
          <Arrow />
        </View>
      </ScrollView>
    </View>
  );
};

export default FirstOnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  scrollViewContainer: {
    flex: 1,
  },
  topImage: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(7),
  },
  mainImage: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(50),
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "500",
  },
  titleContainer: {
    marginBottom: 30,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 15,
  },
  buttonContainer: {
    width: responsiveScreenWidth(50),
    alignSelf: "center",
    marginTop: 20,
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 7,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  footerText: {
    display: "flex",
    flexDirection: "row",
      alignSelf: "center",
    justifyContent: "space-between",
      width: responsiveScreenWidth(90),
    marginTop: 50
  },
});
