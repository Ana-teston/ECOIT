import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { CourseInfoCard } from "../components/course-info-card.component";
import { CourseList } from "../components/course-list.styles";

const SafeArea = styled(SafeAreaView)`
  flex: 1.5;
  ${StatusBar.currentHeight} && "margin-top: ${StatusBar.currentHeight}px";
`;

export const CoursesScreen = () => (
  <SafeArea>
    <CourseList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
      renderItem={() => <CourseInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
