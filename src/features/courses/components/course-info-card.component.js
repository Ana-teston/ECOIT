import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const CourseCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const CourseCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[0]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Price = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const CourseInfoCard = ({ course = {} }) => {
  const {
    name = "Some course",
    info = "Lorem ipsum dolor sit amet sagittis purus.amet sagittis purus. Dis montes nascetur ridiculus mus.",
    photos = [
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    rating = 2,
    price = "€23,99/chaque",
  } = course;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CourseCard elevation={5}>
      <CourseCardCover key={name} source={{ uri: photos[0] }} />
      <Section>
        <Title>{name}</Title>
        <SectionEnd>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
        </SectionEnd>
      </Section>
      <Info>{info}</Info>
      <Section>
        <SectionEnd>
          <Price>{price}</Price>
        </SectionEnd>
      </Section>
    </CourseCard>
  );
};
