import React from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const TitleText = styled.Text`
  font-family: ${(props) => props.theme.fonts.monospace};
`;

const MarkerImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
