import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return <Redirect style={styles.screen} href="./screens/home" />;
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#A80031",
  },
});
