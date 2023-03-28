import { useRouter } from "expo-router";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { Rect, Svg, Text } from "react-native-svg";

export default function RankingButton({ title, link, rank }) {
  const router = useRouter();
  if (rank) {
    rank = "#" + rank;
  }
  return (
    <View style={styles.rankingButton}>
      <Pressable
        onPress={() => {
          router.push("../screens/" + link);
        }}
      >
        <Svg width="100%" height="100%" viewBox="0 0 200 100">
          <Rect fill="#000fa8" width="200" height="100" rx="20" ry="10" />
          <Text
            fill="#000e97"
            y="90"
            x="100"
            textAnchor="middle"
            fontSize="110"
          >
            {rank}
          </Text>
          <Text fill="#fff" y="60" x="100" textAnchor="middle" fontSize="30">
            {title}
          </Text>
        </Svg>
      </Pressable>
    </View>
  );
}
const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  rankingButton: {
    width: widthScreen * 0.4,
    height: widthScreen * 0.25,
  },
});
