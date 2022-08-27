import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "react-native";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const CourseCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const CourseCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[0]};
`;

export const Info = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Price = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding: ${(props) => props.theme.space[3]};
`;
