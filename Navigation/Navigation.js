import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstOnBoarding from "../Screens/FirstOnBoarding";
import SecondOnBoarding from "../Screens/SecondOnBoarding";
import Profile from "../Screens/Profile";
import HomeScreen from "../Screens/HomeScreen";
import FoodDetailsScreen from "../Screens/FoodDetails";
import CartScreen from "../Screens/Cart";
import OrderCompletedScreen from "../Screens/OrderCompleted";
import MealMenuScreen from "../Screens/MealMenu";
import ChatScreen from "../Screens/Chat";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstOnBoarding"
          component={FirstOnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecondOnBoarding"
          component={SecondOnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodDetails"
          component={FoodDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderCompleted"
          component={OrderCompletedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MealMenu"
          component={MealMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
