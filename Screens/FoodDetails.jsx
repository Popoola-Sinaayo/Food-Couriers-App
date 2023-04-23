import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import detailsImage from "../assets/detailsImage.png";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import locationIcon from "../assets/location.png";
import heartIcon from "../assets/heart-1.png";
import halfStar from "../assets/halfStar.png";
import shoppingBag from "../assets/shopping-bag.png";
import { Icon } from "@rneui/themed";
import { useState, useRef, useMemo, useCallback, useEffect } from "react";

const FoodDetails = ({ navigation }) => {
  const [toggleActiveNav, setToggleActiveNav] = useState("account");
  const bottomSheetModalRef = useRef();
  const snapPoints = useMemo(() => ["50%", "65%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image source={detailsImage} style={styles.topImage} />
        <TouchableOpacity
          style={styles.backIconButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <View>
            <Icon
              name="chevron-back-outline"
              type="ionicon"
              color="#FF0000"
              size={35}
              style={styles.backIconButton}
            />
          </View>
        </TouchableOpacity>
      </View>
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
          enablePanDownToClose={false}
        >
          <ScrollView
            style={styles.contentContainer}
            keyboardShouldPersistTaps="never"
          >
            <View style={styles.topSection}>
              <View style={styles.topSectionTextContainer}>
                <Text style={styles.topSectionText}>Popular</Text>
              </View>
              <View style={styles.iconContainer}>
                <View style={styles.locationIconParent}>
                  <Image source={locationIcon} style={styles.locationIcon} />
                </View>
                <View style={styles.heartIconParent}>
                  <Image source={heartIcon} style={styles.icon} />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Chicken Burger Promo Pack</Text>
            </View>
            <View style={styles.ratingsContainer}>
              <View style={styles.ratings}>
                <Image source={halfStar} style={styles.ratingsImage} />
                <Text style={styles.ratingsText}>4.8 Rating</Text>
              </View>
              <View style={styles.ratings}>
                <Image source={shoppingBag} style={styles.ratingsImage} />
                <Text style={styles.ratingsText}>7000+ Order</Text>
              </View>
            </View>
            <View>
              <Text style={styles.description}>
                In a medium bowl, add ground chicken, breadcrumbs, mayonnaise,
                onions, parsley, garlic, paprika, salt and pepper. Use your
                hands to combine all the ingredients together until blended, but
                don't over mix. Chicken Tomatoa Lettuse Preheat grill to
                medium-high heat and oil the grates. Form the mixture into 4-6
                equal patties
              </Text>
            </View>
            <TouchableOpacity
              style={styles.buttonTextContainer}
              onPress={() => navigation.navigate("Cart")}
            >
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </ScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </ScrollView>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  imageContainer: { height: responsiveScreenHeight(100) },
  topImage: {
    height: responsiveScreenHeight(55),
    width: responsiveScreenWidth(100),
  },
  contentContainer: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
  backIconButton: {},
  topSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backIconButtonContainer: {
    backgroundColor: "rgba(214, 19, 85, 0.1)",
    padding: 10,
    borderRadius: 8,
    position: "absolute",
    left: 20,
    top: 40,
  },
  topSectionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#D61355",
    zIndex: 50,
  },
  topSectionTextContainer: {
    backgroundColor: "rgba(214, 19, 85, 0.1)",
    padding: 10,
    borderRadius: 7,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
  },
  icon: {
    width: 20,
    height: 20,
  },
  locationIcon: {
    width: 21,
    height: 25,
  },
  locationIconParent: {
    backgroundColor: "rgba(214, 19, 85, 0.1)",
    padding: 10,
    borderRadius: "50%",
  },
  heartIconParent: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: "50%",
  },
  title: {
    marginTop: 20,
    fontWeight: "500",
    fontSize: 30,
    width: 250,
  },
  ratingsContainer: {
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(8),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratings: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
  },
  ratingsText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#3B3B3B",
    opacity: 0.3,
  },
  ratingsImage: {
    width: 20,
    height: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonTextContainer: {
    backgroundColor: "#D61355",
    marginTop: 30,
    paddingVertical: 25,
    borderRadius: 7,
  },
});
