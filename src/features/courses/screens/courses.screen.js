import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { CourseInfoCard } from "../components/course-info-card.component";
import { CourseList } from "../components/course-list.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import BannerInfo from "../components/banner.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight} && "margin-top: ${StatusBar.currentHeight}px";
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
  margin: ${(props) => props.theme.space[3]};
`;

export const CoursesScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <BannerInfo />
    <CourseList
      horizontal
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
      renderItem={() => (
        <Spacer position="left" size="large">
          <CourseInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
