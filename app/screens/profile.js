import { Redirect, useRouter } from "expo-router";
import { View, Text, Dimensions, Button } from "react-native";
import HeaderNavigation from "../components/header";
import * as FileSystem from "expo-file-system";
import React, { useEffect } from "react";
import Yggdrasil from "../pictures/yggdrasil";
import { StyleSheet } from "react-native";

export default function Profile() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = React.useState("");
  var info = "";
  async function getLoggedIn() {
    try {
      const fileUri = `${FileSystem.documentDirectory}/LoginInfo`;
      info = await FileSystem.readAsStringAsync(fileUri);

      setLoginInfo(info);
    } catch (error) {
      console.log(error.name);
    }
  }
  async function checkLoggedIn() {
    await getLoggedIn();
    if (!info) {
      return router.push("./login");
    }
  }
  async function logginOut() {
    const fileUri = `${FileSystem.documentDirectory}/LoginInfo`;

    await FileSystem.deleteAsync(fileUri);
    return router.push("./login");
  }
  checkLoggedIn();

  return (
    <View>
      <HeaderNavigation active="profile" />
      <View style={styles.profile}>
        <Text style={styles.profileText}>{"Welcome\n" + loginInfo}</Text>
      </View>
      <Button style={styles.button} title="logout" onPress={logginOut} />

      <View style={styles.logo}>
        <Yggdrasil />
      </View>
    </View>
  );
}

const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00A877",
    flexDirection: "column",
  },
  profile: {
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    paddingTop: 50,
  },
  profileText: { fontSize: 30 },
  logo: {
    position: "absolute",
    top: heightScreen * 0.55,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginHorizontal: widthScreen * 0.05,
  },
});
