import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import React from "react";
import HeaderTopNav from "../components/HeaderTopNav";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import bot from "../assets/bot.png";
import Message from "../components/Message";
import tablerIcon from "../assets/tabler_link.png";
import forwardIcon from "../assets/forward-icon.png";
import { TouchableNativeFeedback } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { useState } from "react";

const Chat = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", (e) => {
      setShowKeyboard(true);
    });
    Keyboard.addListener("keyboardWillHide", (e) => {
      setShowKeyboard(false);
    });
  }, []);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <HeaderTopNav />
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Chat</Text>
        </View>
        <View style={styles.chatComponent}>
          <Image source={bot} style={styles.botImage} />
          <Message
            message="Hello! my name is Food Couriers before we start, what is your
              name?"
            sender={true}
          />
          <Message message="Popoola Sinaayo" />
          <Message
            message="Hello! Sinaayo 👋. I can converse in your preferred language. How may I help you today?"
            sender={true}
          />
          <Message message="Is there Fried Riceand pepper chicken?" />
          <Message isTyping={true} />
        </View>
        <View>
          <TextInput />
        </View>
      </ScrollView>
      <View style={[styles.chatBox, { bottom: showKeyboard ? 310 : 0 }]}>
        <TouchableNativeFeedback>
          <View style={styles.tablerIconContainer}>
            <Image source={tablerIcon} style={styles.tablerIcon} />
          </View>
        </TouchableNativeFeedback>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Food runner is typing"
            style={styles.textInput}
          />
          <TouchableNativeFeedback>
            <View style={styles.forwardIconContainer}>
              <Image source={forwardIcon} style={styles.forwardIcon} />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextContainer: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: 700,
  },
  botImage: {
    width: 80,
    height: 80,
  },
  chatComponent: {
    width: responsiveScreenWidth(90),
    alignSelf: "center",
    marginTop: 30,
  },
  messageReceiverContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  messageSender: {
    backgroundColor: "#F6F6F6",
    marginVertical: 10,
    padding: 20,
    width: responsiveScreenWidth(70),
    borderRadius: 18,
    borderTopLeftRadius: 0,
  },
  messageSenderText: {
    fontWeight: "500",
  },
  messageReceiver: {
    backgroundColor: "#D61355",
    marginVertical: 10,
    padding: 20,
    width: responsiveScreenWidth(70),
    borderRadius: 18,
    borderTopRightRadius: 0,
  },
  messageReceiverText: {
    fontWeight: "500",
    color: "white",
  },
  chatBox: {
    position: "absolute",
    bottom: 0,
    width: responsiveScreenWidth(90),
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingBottom: 30,
  },
  tablerIconContainer: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 7,
  },
  tablerIcon: {
    width: 30,
    height: 30,
  },
  textInputContainer: {
    position: "relative",
  },
  textInput: {
    backgroundColor: "#F9FAFB",
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: responsiveScreenWidth(75),
  },
  forwardIconContainer: {
    position: "absolute",
    right: 6,
    top: 8,
  },
  forwardIcon: {
    width: 35,
    height: 35,
  },
});

export default Chat;
