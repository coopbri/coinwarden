import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Provider } from "react-redux";

import Navigator from "./src/navigation/Navigator";
import { store } from "./src/store";

// load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    openSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    lobster: require("./assets/fonts/Lobster-Regular.ttf"),
    // required for react-native-elements (Android)
    MaterialIcons: require("./assets/fonts/MaterialIcons-Regular.ttf"),
    // required for react-native-elements (iOS)
    "Material Icons": require("./assets/fonts/MaterialIcons-Regular.ttf"),
  });
};

/**
 * Main app entrypoint for React Native JavaScript bridge.
 */
const App: React.FC = () => {
  // state
  const [dataLoaded, setDataLoaded] = useState(false);

  // display loading screen while loading
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
