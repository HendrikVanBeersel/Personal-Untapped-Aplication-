import data from "../../../back-end/database/data.json";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BackButton from "../../components/backButton";
import HeaderSubScreenNavigation from "../../components/headerSubScreen";
import UntappedLogo from "../../pictures/untappedLogo";

export default function BestBeerRanking() {
  const beersRanked = beerlist();
  function beerlist() {
    var listAllBeers = [];
    listAllBeers = [...data.map((person) => person.topBeers).flat()];
    const beersRanked = listAllBeers
      .reduce((beersCountedTemp, currentBeer) => {
        const index = beersCountedTemp.findIndex(
          (element) => element.name === currentBeer
        );
        if (index !== -1) {
          beersCountedTemp[index].count++;
        } else {
          beersCountedTemp.push({ name: currentBeer, count: 1 });
        }
        return beersCountedTemp;
      }, [])
      .filter((beer) => beer.count > 1)
      .sort((a, b) => b.count - a.count);
    return beersRanked;
  }

  const renderRank = ({ item }) => {
    return (
      <View style={styles.rankingElement}>
        <Text style={styles.rankingText}>{item.name}</Text>
        <Text style={styles.rankingText}>
          {item.count + " friends love this \nbeer/cider"}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <HeaderSubScreenNavigation active="ranking" subActive="bestBeers" />
      <BackButton />
      <SafeAreaView style={styles.rankingBox}>
        <FlatList
          data={beersRanked}
          renderItem={renderRank}
          keyExtractor={(beer) => beer.name}
        />
      </SafeAreaView>
      <View style={styles.image}>
        <UntappedLogo />
      </View>
    </View>
  );
}
const widthScreen = Dimensions.get("window").width;

const widthRanking = widthScreen * 0.45;
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
