import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import HeaderNavigation from "../components/header";
import data from "../../back-end/database/data.json";
import BackButton from "../components/backButton";
import RankingButton from "../components/rankingButton";
import UntappedLogo from "../pictures/untappedLogo";
import React, { useEffect } from "react";
import { useAnimatedGestureHandler } from "react-native-reanimated";
import * as FileSystem from "expo-file-system";

export default function Ranking() {
  const [loginInfo, setLoginInfo] = React.useState("");
  const [rank, setRank] = React.useState({
    unique: null,
    badges: null,
    checkin: null,
  });
  async function getLoggedIn() {
    try {
      const fileUri = `${FileSystem.documentDirectory}/LoginInfo`;
      var info = await FileSystem.readAsStringAsync(fileUri);
      console.log(info);
      setLoginInfo(info);
    } catch (error) {
      console.log(error.name);
    }
  }

  useEffect(() => {
    getLoggedIn().then(setRanking());
  }, []);
  useEffect(() => {
    setRanking();
  }, [loginInfo]);
  function setRanking() {
    if (loginInfo) {
      var rankTemp = {
        unique: 0,
        badges: 0,
        checkin: 0,
      };
      var loginInfoTemp = loginInfo;
      var rankingUnique = [
        ...data.sort((a, b) => b.uniqueBeers - a.uniqueBeers),
      ];
      var rankingBadges = [...data.sort((a, b) => b.badges - a.badges)];
      var rankingCheckins = [...data.sort((a, b) => b.checkins - a.checkins)];
      console.log("check " + loginInfo);
      rankTemp.unique =
        rankingUnique.findIndex((person) => person.name === loginInfoTemp) + 1;
      rankTemp.badges =
        rankingBadges.findIndex((person) => person.name === loginInfoTemp) + 1;
      rankTemp.checkin =
        rankingCheckins.findIndex((person) => person.name === loginInfoTemp) +
        1;
      setRank(rankTemp);
    }
  }

  return (
    <View>
      <HeaderNavigation active="ranking" />
      <View style={styles.buttonLayout}>
        <RankingButton
          title="unique beers"
          link="rankingSubscreens/uniqueBeersRanking"
          rank={rank.unique}
        />
        <RankingButton
          title="Badges"
          link="rankingSubscreens/badgesRanking"
          rank={rank.badges}
        />
        <RankingButton
          title="check-ins"
          link="rankingSubscreens/checkinRanking"
          rank={rank.checkin}
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
