import { Dimensions, StyleSheet, Text, View } from "react-native";
import HeaderNavigation from "../../components/header";
import data from "../../../back-end/database/data.json";
import BackButton from "../../components/backButton";
import UntappedLogo from "../../pictures/untappedLogo";
import HeaderSubScreenNavigation from "../../components/headerSubScreen";

export default function UniqueBeersRanking() {
  var ranking = data.sort((a, b) => b.uniqueBeers - a.uniqueBeers);
  return (
    <View>
      <HeaderSubScreenNavigation active="ranking" subActive="uniqueBeers" />
      <BackButton />
      <View style={styles.rankingBox}>
        <View style={styles.rankingElement}>
          <Text style={styles.rankingText}>Ranking</Text>
          <Text style={styles.nameText}>Name</Text>
          <Text style={styles.totalText}>#Unique Beers/ciders</Text>
        </View>
        {ranking.map((person, index) => (
          <View style={styles.rankingElement} key={person.name}>
            <Text style={styles.rankingText}>{index + 1}</Text>
            <Text style={styles.nameText}>{person.name} </Text>
            <Text style={styles.totalText}>{person.uniqueBeers}</Text>
          </View>
        ))}
      </View>
      <UntappedLogo />
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;

const widthRanking = widthScreen * 0.2;
const widthName = widthScreen * 0.3;
const widthTotal = widthScreen * 0.4;

const styles = StyleSheet.create({
  rankingBox: {
    marginTop: widthScreen * 0.05,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
  rankingElement: {
    flexDirection: "row",
  },
  rankingText: {
    color: "#fff",

    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    width: widthRanking,
  },
  nameText: {
    color: "#fff",

    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    width: widthName,
  },
  totalText: {
    color: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    width: widthTotal,
  },
});
