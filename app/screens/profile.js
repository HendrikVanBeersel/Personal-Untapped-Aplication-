import { Redirect } from "expo-router";
import { View, Text, Dimensions } from "react-native";
import HeaderNavigation from "../components/header";
import * as FileSystem from "expo-file-system";
import React, { useEffect } from "react";
import Yggdrasil from "../pictures/yggdrasil";
import { StyleSheet } from "react-native";

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
  useEffect(() => {
    getLoggedIn().then(checkLoggedIn());
  }, []);
  function checkLoggedIn() {
    if (loginInfo) {
      return <Redirect href="./login" />;
    }
  }
  return (
    <View>
      <HeaderNavigation active="profile" />
      <View style={styles.profile}>
        <Text>{loginInfo}</Text>
      </View>
      <View style={styles.logo}>
        <Yggdrasil />
      </View>
    </View>
  );
}

const heightScreen = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00A877",
    flexDirection: "column",
  },
  profile: {
    padding: 10,
    flexDirection: "column",
  },
  logo: {
    position: "absolute",
    top: heightScreen * 0.55,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
