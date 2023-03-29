import { Link } from "expo-router";
import { StyleSheet, Dimensions, View } from "react-native";

export default function HeaderSubScreenNavigation({ active, subActive }) {
  return (
    <View style={styles.header}>
      <View style={styles.navigation}>
        <Link
          style={
            active === "home" ? styles.activeBackground : styles.headerElement
          }
          href="../home"
        >
          home
        </Link>
        <Link
          style={
            active === "ranking"
              ? styles.activeBackground
              : styles.headerElement
          }
          href="../ranking"
        >
          ranking
        </Link>
        <Link
          style={
            active === "profile"
              ? styles.activeBackground
              : styles.headerElement
          }
          href="../profile"
        >
          profile
        </Link>
      </View>
      <View style={styles.navigation}>
        <Link
          style={
            subActive === "uniqueBeers"
              ? styles.activeBackground
              : styles.headerElement
          }
          href="./uniqueBeersRanking"
        >
          unique beers
        </Link>
        <Link
          style={
            subActive === "badges"
              ? styles.activeBackground
              : styles.headerElement
          }
          href="./badgesRanking"
        >
          badges
        </Link>
        <Link
          style={
            subActive === "checkin"
              ? styles.activeBackground
              : styles.headerElement
          }
          href="./checkinRanking"
        >
          check-in
        </Link>
      </View>
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
  },
  navigation: {
    backgroundColor: "#A80031",

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
