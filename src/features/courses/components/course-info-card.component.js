import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const CourseCard = styled(Card)`
  background-color: white;
`;

const CourseCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const CourseInfoCard = ({ course = {} }) => {
  const {
    name = "Some course",
    info,
    photos = [
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    rating = 4,
  } = course;
  return (
    <CourseCard elevation={5}>
      <CourseCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </CourseCard>
  );
};
