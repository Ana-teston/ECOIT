import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <View style={styles.header}>
    <Image
      style={{ width: 40, height: 40 }}
      source={require("../../../../assets/logoGreen.png")}
    />
    <FontAwesomeIcon icon={faMagnifyingGlass} size={20} color="#18A47A" />
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header;
