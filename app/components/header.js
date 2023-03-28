import { Link } from "expo-router";
import { StyleSheet, Dimensions, View } from "react-native";

export default function HeaderNavigation({ active }) {
  return (
    <View style={styles.header}>
      <Link
        style={
          active === "home" ? styles.activeBackground : styles.headerElement
        }
        href="../screens/home"
      >
        home
      </Link>
      <Link
        style={
          active === "ranking" ? styles.activeBackground : styles.headerElement
        }
        href="../screens/ranking"
      >
        ranking
      </Link>
      <Link
        style={
          active === "profile" ? styles.activeBackground : styles.headerElement
        }
        href="../screens/profile"
      >
        profile
      </Link>
    </View>
  );
}

const heightScreen = Dimensions.get("screen").height;
const heightWindow = Dimensions.get("window").height;
const screenOffset = (heightScreen - heightWindow) / 2;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#A80031",

    paddingTop: screenOffset,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerElement: {
    paddingHorizontal: 30,
    color: "#fff",
    paddingVertical: 5,
  },
  activeBackground: {
    backgroundColor: "#00A877",
    paddingHorizontal: 30,
    paddingVertical: 5,
    color: "#fff",
  },
});
