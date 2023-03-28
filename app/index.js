import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return <Redirect href="./screens/home" />;
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
  },
});
