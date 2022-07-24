import React from "react";
import { SafeAreaView, View, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { CourseInfo } from "../components/course-info.component";

export const CoursesScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <CourseInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "#18A47A",
  },
});
