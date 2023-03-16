import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>Login Screen</Text>
    </>
  );
};

export default LoginScreen;
