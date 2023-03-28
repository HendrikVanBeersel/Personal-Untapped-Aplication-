import React from "react";
import { Button, TextInput } from "react-native";
import { View } from "react-native-web";
import HeaderNavigation from "../components/header";

export default function Login() {
  const [loginText, setLoginText] = React.useState("");
    function loginManager(){
        
    }
  return (
    <View>
      <HeaderNavigation />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setLoginText}
          value={loginText}
        />
        <Button
        title="login"
        onPress={loginManager()}/>

      </View>
    </View>
  );
}
