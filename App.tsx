import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
// import theme from "./src/themes/theme";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light }}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
