import React from "react";
import { Button, Dimensions, StyleSheet, TextInput, View } from "react-native";
import HeaderNavigation from "../components/header";
import data from "../../back-end/database/data.json";
import { Redirect, useRouter } from "expo-router";
import * as FileSystem from "expo-file-system";

export default function Login() {
  var fileUri = "";
  const router = useRouter();
  const [error, setError] = React.useState(false);
  const [loginText, setLoginText] = React.useState("");
  const [loggedin, setLoggedin] = React.useState(false);

  async function logginIn() {
    try {
      fileUri = `${FileSystem.documentDirectory}/LoginInfo`;
    } catch (error) {
      console.log(error.name);
    }
    data.forEach(async (person) => {
      if (person.name == loginText) {
        //later veranderen naar JSON
        await FileSystem.writeAsStringAsync(fileUri, person.name);
        setLoggedin(true);
      }
    });
  }
  if (loggedin) {
    return <Redirect href="./profile" />;
  }
  return (
    <View>
      <HeaderNavigation active="profile" />
      <View>
        <TextInput
          style={error ? styles.errorInput : styles.input}
          onChangeText={(text) => {
            setLoginText(text);
            setError(false);
          }}
          value={loginText}
        />
        <Button style={styles.button} title="login" onPress={logginIn} />
      </View>
    </View>
  );
}

const widthScreen = Dimensions.get("window").width;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#000",
    color: "#fff",
    margin: widthScreen * 0.05,
  },
  errorInput: {
    backgroundColor: "#f00",
    color: "#fff",
    margin: widthScreen * 0.05,
  },
  button: {
    marginHorizontal: widthScreen * 0.05,
  },
});
