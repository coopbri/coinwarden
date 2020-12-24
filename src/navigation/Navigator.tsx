import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "../lib/theme";
import OverviewScreen from "../screens/OverviewScreen";

// default stack navigator options
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? theme.colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : theme.colors.primary,
};

/**
 * Application stack navigator.
 */
const Stack = createStackNavigator();
const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default Navigator;
