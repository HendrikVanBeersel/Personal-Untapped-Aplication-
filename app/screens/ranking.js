import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import HeaderNavigation from "../components/header";
import data from "../../back-end/database/data.json";
import BackButton from "../components/backButton";
import RankingButton from "../components/rankingButton";
import UntappedLogo from "../pictures/untappedLogo";

export default function Ranking() {
  var ranking = data.sort((a, b) => b.uniqueBeers - a.uniqueBeers);
  return (
    <View>
      <HeaderNavigation active="ranking" />
      <View style={styles.buttonLayout}>
        <RankingButton
          title="unique beers"
          link="rankingSubscreens/uniqueBeersRanking"
        />
        <RankingButton title="Badges" link="rankingSubscreens/badgesRanking" />
        <RankingButton
          title="checkins"
          link="rankingSubscreens/checkinRanking"
        />
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
  buttonLayout: {
    flexDirection: "row",
    padding: widthScreen * 0.05,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
