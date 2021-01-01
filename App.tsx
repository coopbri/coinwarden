import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { Provider } from "react-redux";

import Navigator from "./src/navigation/Navigator";
import { store } from "./src/store";
import theme from "./src/lib/theme";

// load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    lobster: require("./assets/fonts/Lobster-Regular.ttf"),
    // required for react-native-elements (Android)
    MaterialIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf"),
    // required for react-native-elements (iOS)
    "Material Icons": require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf"),
  });
};

/**
 * Master app component.
 */
const App: React.FC = () => {
  // state
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // set Android navigation bar color
    Platform.OS === "android" &&
      changeNavigationBarColor(theme.colors.primary, false, true);
  }, []);

  // display loading screen while loading fonts
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    // redux store provider
    <Provider store={store}>
      {/* navigation setup */}
      <Navigator />
    </Provider>
  );
};

export default App;
