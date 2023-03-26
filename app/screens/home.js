import { View, Text, StyleSheet, Dimensions } from "react-native";
import HeaderNavigation from "../components/header";
import UntappedLogo from "../pictures/untappedLogo";
import Yggdrasil from "../pictures/yggdrasil";

export default function Home() {
  return (
    <View style={styles.homeScreen}>
      <HeaderNavigation active="home" />
      <View style={styles.welcomeScreen}>
        <Text style={styles.text}>
          Welcome to the untapped app of the Parkers
        </Text>
        <View style={styles.images}>
          <View style={styles.image}>
            <UntappedLogo />
          </View>
          <Yggdrasil style={styles.image} />
        </View>
      </View>
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;

const widthImage = widthScreen / 3;

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: "#A80031",
  },
  images: {
    justifyContent: "center",

    flexDirection: "row",
    alignItems: "center",
    width: widthScreen,
  },
  image: {
    justifyContent: "center",

    flex: 1,
    width: widthImage,
    alignItems: "center",
  },
  text: {
    fontFamily: "cursive",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  welcomeScreen: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00A877",
    paddingTop: 200,
    padding: 10,
    margin: 0,
  },
});
