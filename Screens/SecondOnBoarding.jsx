import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";
import React, { useState, useMemo, useCallback, useRef } from "react";
import topPattern from "../assets/Pattern.png";
import mainImage from "../assets/Illustration.png";
import googleImage from "../assets/ic_google.png";
import GoogleImage from "../assets/svg/Google";
import { LinearGradient } from "expo-linear-gradient";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const SecondOnBoarding = ({ navigation }) => {
  const [toggleActiveNav, setToggleActiveNav] = useState("account");
  const bottomSheetModalRef = useRef();
  const snapPoints = useMemo(() => ["25%", "70%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewContainer}
        keyboardShouldPersistTaps="never"
      >
        <View>
          <Image source={topPattern} style={styles.topImage} />
        </View>
        <View>
          <Image source={mainImage} style={styles.mainImage} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Great Food at a</Text>
          <Text style={styles.title}>Cheap Price</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>You can eat at expensive</Text>
          <Text style={styles.subTitle}>restaurants with</Text>
          <Text style={styles.subTitle}>affordable price</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => handlePresentModalPress()}
        >
          <LinearGradient style={styles.button} colors={["#D61355", "#FF0000"]}>
            <Text style={styles.buttonText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{
            backgroundColor: "#FFF0F0",
            width: 70,
            paddingTop: 3,
            paddingBottom: 3,
          }}
        >
          <ScrollView
            style={styles.contentContainer}
            keyboardShouldPersistTaps="never"
          >
            <View style={styles.modalHeaderNav}>
              <TouchableOpacity onPress={() => setToggleActiveNav("account")}>
                <View>
                  <Text
                    style={[
                      styles.modalNav,
                      toggleActiveNav === "account" && styles.activeModalNav,
                    ]}
                  >
                    Create Account
                  </Text>
                  {toggleActiveNav === "account" ? (
                    <View style={styles.activeBorderBottom}></View>
                  ) : (
                    <View style={styles.inActiveBorderBottom}></View>
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setToggleActiveNav("login")}>
                <View>
                  <Text
                    style={[
                      styles.modalNav,
                      toggleActiveNav === "login" && styles.activeModalNav,
                    ]}
                  >
                    Login
                  </Text>
                  {toggleActiveNav === "login" ? (
                    <View style={styles.activeLoginBorderBottom}></View>
                  ) : (
                    <View style={styles.inActiveLoginBorderBottom}></View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
            {toggleActiveNav === "account" ? (
              <>
                <View style={styles.formContainer}>
                  <View style={styles.formItemContainer}>
                    <Text style={styles.formText}>Full Name</Text>
                    <TextInput
                      placeholder="Emmanuel Kamcy"
                      style={styles.formTextInput}
                    />
                  </View>
                  <View style={styles.formItemContainer}>
                    <Text style={styles.formText}>Email address</Text>
                    <TextInput
                      placeholder="ekamacy@gmail.com"
                      style={styles.formTextInput}
                      keyboardType="email-address"
                    />
                  </View>
                  <View style={styles.formItemContainer}>
                    <Text style={styles.formText}>Password</Text>
                    <TextInput
                      placeholder="Emmanuel Kamcy"
                      style={styles.formTextInput}
                      keyboardType="visible-password"
                    />
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.signUpButtonTextContainer}
                    onPress={() => navigation.navigate("Home")}
                  >
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                  </TouchableOpacity>
                  <View style={styles.horizontalRule}></View>
                  <TouchableOpacity
                    style={styles.googleSignUpButtonTextContainer}
                  >
                    <View>
                      <GoogleImage />
                    </View>
                    <Text style={styles.googleSignUpButtonText}>
                      Sign Up with Google
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <View style={styles.formContainer}>
                  <View style={styles.formItemContainer}>
                    <Text style={styles.formText}>Email address</Text>
                    <TextInput
                      placeholder="ekamacy@gmail.com"
                      style={styles.formTextInput}
                      keyboardType="email-address"
                    />
                  </View>
                  <View style={styles.formItemContainer}>
                    <Text style={styles.formText}>Password</Text>
                    <TextInput
                      placeholder="Emmanuel Kamcy"
                      style={styles.formTextInput}
                      keyboardType="visible-password"
                    />
                  </View>
                  <TouchableOpacity style={styles.forgotPasswordTextContainer}>
                    <Text style={styles.forgotPasswordText}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.signUpButtonTextContainer}
                    onPress={() => navigation.navigate("Home")}
                  >
                    <Text style={styles.signUpButtonText}>Login</Text>
                  </TouchableOpacity>
                  <View style={styles.horizontalRule}></View>
                  <TouchableOpacity
                    style={styles.googleSignUpButtonTextContainer}
                  >
                    <View>
                      <GoogleImage />
                    </View>
                    <Text style={styles.googleSignUpButtonText}>
                      Sign Up with Google
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </ScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default SecondOnBoarding;

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
    marginTop: 50,
  },
  modal: {
    height: responsiveScreenHeight(60),
    width: responsiveScreenWidth(100),
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
  },
  modalHeaderNav: {
    display: "flex",
    width: responsiveScreenWidth(80),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalNav: {
    fontSize: 16,
    fontWeight: "700",
  },
  activeModalNav: {
    color: "#D61355",
    // paddingBottom: 8,
    borderColor: "white",
    borderWidth: 1,
    borderBottomColor: "#D61355",
  },
  inActiveBorderBottom: {
    marginTop: 10,
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: "white",
    width: 60,
    alignSelf: "center",
  },
  inActiveLoginBorderBottom: {
    marginTop: 10,
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: "white",
    width: 20,
    alignSelf: "center",
  },
  activeBorderBottom: {
    marginTop: 10,
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: "#D61355",
    width: 60,
    alignSelf: "center",
  },
  activeLoginBorderBottom: {
    marginTop: 10,
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: "#D61355",
    width: 20,
    alignSelf: "center",
  },
  formText: {
    fontSize: 18,
    marginLeft: 30,
  },
  formTextInput: {
    borderWidth: 1,
    borderColor: "black",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    borderRadius: 8,
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
  formItemContainer: {
    marginBottom: 20,
  },
  formContainer: {
    marginTop: 30,
  },
  signUpButtonTextContainer: {
    width: responsiveScreenWidth(70),
    borderRadius: 10,
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 60,
    paddingLeft: 60,
    backgroundColor: "#D61355",
  },
  signUpButtonText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: 700,
  },
  horizontalRule: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#D2D4D8",
    paddingTop: 0.5,
    paddingBottom: 0.5,
    width: responsiveScreenWidth(40),
    alignSelf: "center",
  },
  googleSignUpButtonTextContainer: {
    width: responsiveScreenWidth(70),
    borderRadius: 10,
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  googleSignUpButtonText: {
    textAlign: "center",
    fontSize: 20,
  },
  forgotPasswordText: {
    color: "#D61355",
    fontSize: 14,
    textAlign: "right",
    fontWeight: "500",
  },
  forgotPasswordTextContainer: {
    width: responsiveScreenWidth(94),
    marginTop: -10,
    height: responsiveScreenHeight(5),
  },
});
