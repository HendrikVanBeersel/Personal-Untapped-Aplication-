import { Redirect } from "expo-router";
import { View, Text } from "react-native";
import HeaderNavigation from "../components/header";
import * as FileSystem from "expo-file-system";
import React from "react";

export default function Profile() {
  const [loginInfo, setLoginInfo] = React.useState("");
  async function getLoggedIn() {
    try {
      const fileUri = `${FileSystem.documentDirectory}/LoginInfo`;
      var info = await FileSystem.readAsStringAsync(fileUri);
      console.log(loginInfo);
      setLoginInfo(info);
    } catch (error) {
      console.log(error.name);
    }
  }
  getLoggedIn().then(checkLoggedIn());
  function checkLoggedIn() {
    if (loginInfo) {
      return <Redirect href="./login" />;
    }
  }
  return (
    <View>
      <HeaderNavigation active="profile" />

      <Text>{loginInfo}</Text>
    </View>
  );
}
