import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OverviewScreen from "../screens/OverviewScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultStackNavOptions}>
        <Stack.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            title: "Coinwarden",
            headerTitleStyle: {
              fontFamily: "lobster",
              fontSize: 32,
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
