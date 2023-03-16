import React, { useEffect } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 1000);
  }, []);

  return (
    <>
      <Text>Splash Screen</Text>
    </>
  );
};

export default SplashScreen;
