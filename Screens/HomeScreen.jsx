import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import React from "react";
import topLoginImage from "../assets/home-pattern.png";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import burgerIcon from "../assets/burgerIcon.png";
import locationIcon from "../assets/Frame.png";
import avatar from "../assets/avatar.png";
import banner from "../assets/home-banner.png";
import burgerImage from "../assets/burger.png";
import pizzaImage from "../assets/pizza.png";
import cheeseImage from "../assets/cheese.png";
import starImage from "../assets/star.png";
import plusImage from "../assets/add.png";
import pizzaCategoryImage from "../assets/pizzaCategory.png";
import burger from "../assets/burger-1.png";
import burger1 from "../assets/burger-2.png";
import { Icon, withBadge } from "@rneui/themed";
import { TouchableWithoutFeedback } from "react-native";
import BottomNav from "../components/BottomNav";
// import { Home } from "react-native-iconly";

const HomeScreen = ({ navigation }) => {
  const BadgedCartIcon = withBadge(7)(Icon);
  const BadgedChatIcon = withBadge()(Icon);
  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <ScrollView
        style={styles.screenContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image source={topLoginImage} style={styles.topImage} />
        </View>
        <View style={styles.topSection}>
          <TouchableOpacity>
            <Image source={burgerIcon} style={styles.burgerIconImage} />
          </TouchableOpacity>
          <View style={styles.topMiddleTextContainer}>
            <Image source={locationIcon} style={styles.burgerIconImage} />
            <Text>Freedom way, Lekki phase</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image source={avatar} style={styles.avatarImage} />
          </TouchableOpacity>
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
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.bannerImage} />
          <View style={styles.bannerControllerContainer}>
            <TouchableOpacity>
              <View
                style={[styles.bannerController, styles.bannerControllerActive]}
              ></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.bannerController}></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.bannerController}></View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: 10 }}
        >
          <TouchableOpacity
            style={[styles.foodContainer, styles.activeContainer]}
          >
            <View>
              <Image source={burgerImage} style={styles.burgerImage} />
            </View>
            <View>
              <Text style={[styles.foodText, styles.activeFoodText]}>
                Burger
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foodContainer}>
            <View>
              <Image source={pizzaImage} style={styles.pizzaImage} />
            </View>
            <View>
              <Text style={styles.foodText}>Pizza</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foodContainer}>
            <View>
              <Image source={cheeseImage} style={styles.cheeseImage} />
            </View>
            <View>
              <Text style={styles.foodText}>Burger</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView
          style={styles.foodCardContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("FoodDetails")}
          >
            <View style={styles.foodCard}>
              <View style={styles.cardTopRating}>
                <Image source={starImage} style={styles.starImage} />
                <Text style={styles.ratingText}>3.8</Text>
              </View>
              <Image source={burger} style={styles.mainCardImage} />
              <View>
                <Text style={styles.mainCardHeader}>Chicken Burger</Text>
                <Text style={styles.subCardHeader}>
                  100 gr chicken + tomato + cheese Lettuce
                </Text>
              </View>
              <View style={styles.cardFooterContainer}>
                <Text style={styles.cardFooterText}>$20.00</Text>
                <TouchableOpacity>
                  <Image source={plusImage} style={styles.plusImage} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("FoodDetails")}
          >
            <View style={styles.foodCard}>
              <View style={styles.cardTopRating}>
                <Image source={starImage} style={styles.starImage} />
                <Text style={styles.ratingText}>4.5</Text>
              </View>
              <Image source={burger1} style={styles.mainCardImage} />
              <View>
                <Text style={styles.mainCardHeader}>Cheese Burger</Text>
                <Text style={styles.subCardHeader}>
                  100 gr meat + tomato + cheese Lettuce
                </Text>
              </View>
              <View style={styles.cardFooterContainer}>
                <Text style={styles.cardFooterText}>$20.00</Text>
                <TouchableOpacity>
                  <Image source={plusImage} style={styles.plusImage} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <View style={styles.popularCategoryContainer}>
          <View style={styles.popularCategoryHeader}>
            <Text style={styles.popularCategoryMainHeader}>
              Popular Meal Menu
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("MealMenu")}>
              <Text style={styles.popularCategorySubHeader}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.popularCategoryCard}>
            <Image
              source={pizzaCategoryImage}
              style={styles.pizzaCategoryImage}
            />
            <View>
              <Text style={styles.categoryHeader}>Pepper Pizza</Text>
              <Text style={styles.categoryHeaderText}>5kg Box of pizza</Text>
            </View>
            <View>
              <Text style={styles.categoryPrice}>$15</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    marginBottom: 50,
  },
  imageContainer: {
    width: responsiveScreenWidth(100),
    position: "absolute",
    left: responsiveScreenWidth(10),
  },
  topImage: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(15),
  },
  topSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
  topMiddleTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  burgerIconImage: {
    width: 30,
    height: 30,
  },
  avatarImage: {
    width: 40,
    height: 40,
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
  bannerImage: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
    marginBottom: 20,
  },
  bannerContainer: {
    marginBottom: 20,
  },
  bannerControllerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: 60,
    alignSelf: "center",
    justifyContent: "space-between",
  },
  bannerController: {
    padding: 6,
    backgroundColor: "#E2E2E2",
    width: 10,
    borderRadius: "50%",
  },
  bannerControllerActive: {
    backgroundColor: "#FF0000",
  },
  foodContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 140,
    height: 50,
    justifyItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#FF0000",
    paddingHorizontal: 5,
    marginHorizontal: 10,
    borderRadius: 7,
  },
  activeContainer: {
    backgroundColor: "#D61355",
  },
  burgerImage: {
    width: 50,
    height: 50,
    marginTop: 8,
  },

  pizzaImage: {
    width: 60,
    height: 60,
    marginTop: 15,
  },
  cheeseImage: {
    width: 40,
    height: 40,
  },
  foodText: {
    fontSize: 22,
    fontWeight: "500",
  },
  activeFoodText: {
    color: "white",
  },
  foodCardContainer: {
    alignSelf: "center",
    // marginTop: 2,
  },
  cardTopRating: {
    display: "flex",
    flexDirection: "row",
    width: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },
  starImage: {
    width: 20,
    height: 20,
  },
  ratingText: {
    fontWeight: "700",
  },
  mainCardImage: {
    alignSelf: "center",
    width: 120,
    height: 100,
  },
  mainCardHeader: {
    fontWeight: "500",
    fontSize: 18,
    marginTop: 10,
  },
  subCardHeader: {
    color: "#3B3B3B",
    fontWeight: "600",
    opacity: 0.5,
    width: 200,
  },
  cardFooterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  plusImage: {
    width: 30,
    height: 30,
  },
  cardFooterText: {
    fontSize: 24,
    color: "#D61355",
  },
  foodCard: {
    width: 200,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    paddingHorizontal: 15,
    marginVertical: 20,
    borderRadius: 7,
    paddingVertical: 15,
    marginLeft: 20,
  },
  popularCategoryContainer: {
    width: responsiveWidth(90),
    alignSelf: "center",
  },
  popularCategoryHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  popularCategoryMainHeader: {
    fontSize: 20,
    fontWeight: "500",
  },
  popularCategorySubHeader: {
    color: "#3B3B3B",
    fontWeight: "500",
  },
  popularCategoryCard: {
    backgroundColor: "white",
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    padding: 20,
    borderRadius: 7,
    marginBottom: 10,
  },
  categoryHeader: {
    fontSize: 22,
    fontWeight: "500",
  },
  categoryHeaderText: {
    color: "#3B3B3B",
  },
  categoryPrice: {
    color: "#D61355",
    fontSize: 22,
    fontWeight: "700",
  },
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
