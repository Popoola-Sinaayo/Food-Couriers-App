import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import isTypingImage from "../assets/isTyping.png";

const Message = ({ sender, message, isTyping }) => {
  return (
    <>
      {isTyping ? (
        <View>
          <Image source={isTypingImage} style={styles.isTypingImage} />
        </View>
      ) : sender ? (
        <View style={styles.messageContainer}>
          <View style={styles.messageSender}>
            <Text style={styles.messageSenderText}>{message}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.messageReceiverContainer}>
          <View style={styles.messageReceiver}>
            <Text style={styles.messageReceiverText}>{message}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
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
  isTypingImage: {},
});
