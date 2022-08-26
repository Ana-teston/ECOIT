import React from "react";
import {
  CourseCard,
  CourseCardCover,
  Info,
  Section,
  Title,
  SectionEnd,
  Rating,
  Price,
} from "./couse-info-card.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

export const CourseInfoCard = ({ course = {} }) => {
  const {
    name = "Some course",
    info = "Lorem ipsum dolor sit amet sagittis purus.amet sagittis purus. Dis montes nascetur ridiculus mus.",
    photos = [
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    rating = 5,
    price = "€23,99/chaque",
  } = course;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CourseCard elevation={2}>
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
