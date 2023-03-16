import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation alignment="center" />
      <Divider />
      <Layout style={styles.layout}>
        <Button onPress={() => console.log("test")}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
});

export default LoginScreen;
