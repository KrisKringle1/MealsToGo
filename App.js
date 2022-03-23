import React from "react";
// v9 compat packages are API compatible with v8 code
import { initializeApp } from "firebase/app";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCqIWZAAozAKbgrhHwYL0intaCeLv982e0",
    authDomain: "mealstogo-f128b.firebaseapp.com",
    projectId: "mealstogo-f128b",
    storageBucket: "mealstogo-f128b.appspot.com",
    messagingSenderId: "108671706316",
    appId: "1:108671706316:web:d9ca61134760d3bb97ce69",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
