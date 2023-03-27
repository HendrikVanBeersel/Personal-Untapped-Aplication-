import { Dimensions, StyleSheet, Text, View } from "react-native";
import HeaderNavigation from "../components/header";
import data from "../../back-end/People.json";

export default function Ranking() {
  var ranking = data.sort((a, b) => b.uniqueBeers - a.uniqueBeers);
  return (
    <View>
      <HeaderNavigation active="ranking" />
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
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;

const widthRanking = widthScreen * 0.2;
const widthName = widthScreen * 0.3;
const widthTotal = widthScreen * 0.4;

const styles = StyleSheet.create({
  rankingBox: {
    marginTop: widthScreen / 4,
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
