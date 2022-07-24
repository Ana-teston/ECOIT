import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { CoursesScreen } from "./src/features/courses/screens/courses.screen";

export default function App() {
  return (
    <>
      <CoursesScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
