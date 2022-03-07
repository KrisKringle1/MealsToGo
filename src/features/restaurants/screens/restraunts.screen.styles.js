import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
