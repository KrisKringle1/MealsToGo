import React from "react";
import { Text } from "react-native";
import { RestaurantsDetailScreen } from "../../features/restaurants/screens/restraunts-detail.screen";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = ({ route, navigation }) => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantsDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
