import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { CoursesScreen } from "./src/features/courses/screens/courses.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import Header from "./src/features/courses/components/header";
import BannerInfo from "./src/features/courses/components/banner.component";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  if (!oswaldLoaded || !robotoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <BannerInfo />
        <CoursesScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
