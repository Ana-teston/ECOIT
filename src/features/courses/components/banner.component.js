import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";

const image = {
  uri: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg",
};

const BannerInfo = () => (
  <>
    <SafeArea>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.overlay}>
          <Text style={styles.text1}>Start Now</Text>
          <Text style={styles.text2}>I made during the week</Text>
        </View>
      </ImageBackground>
    </SafeArea>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "auto",
    justifyContent: "center",
    margin: 0,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(24,164,122,0.20)",
    alignSelf: "auto",
    justifyContent: "center",
    margin: 0,
  },
  text1: {
    color: "white",
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "Regular",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.08)",
  },
  text2: {
    color: "white",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "regular",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.08)",
  },
});

export default BannerInfo;
