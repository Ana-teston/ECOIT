import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const CourseCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const CourseCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const CourseInfoCard = ({ course = {} }) => {
  const {
    name = "Some course",
    info = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl condimentum id venenatis a. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Neque vitae tempus quam pellentesque nec nam. Mattis rhoncus urna neque viverra justo nec ultrices. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Sit amet cursus sit amet dictum sit amet justo donec. Augue ut lectus arcu bibendum at varius. Fusce id velit ut tortor pretium viverra. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Hac habitasse platea dictumst quisque sagittis purus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Vivamus at augue eget arcu dictum varius duis. Dis parturient montes nascetur ridiculus mus. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Bibendum neque egestas congue quisque egestas. At urna condimentum mattis pellentesque id nibh tortor id.",
    ],
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
