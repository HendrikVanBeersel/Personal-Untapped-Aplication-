import { useRouter } from "expo-router";
import {
  StyleSheet,
  Button,
  Pressable,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Polygon, Svg } from "react-native-svg";

export default function BackButton() {
  const router = useRouter();

  return (
    <View style={styles.backButton}>
      <Pressable
        onPress={() => {
          router.back();
        
        }}
      >
        <Svg width="100%" height="100%" viewBox="0 0 100 100">
          <Polygon
            fill="black"
            points="100,40 100,60 30,60 65,100 45,100 0,50 45,0 65,0 30,40"
          />
        </Svg>
      </Pressable>
    </View>
  );
}
const widthScreen = Dimensions.get("screen").width;
const backButtonWidth = widthScreen / 12;
const universalMargin = widthScreen * 0.05;
const styles = StyleSheet.create({
  backButton: {
    width: backButtonWidth,
    marginLeft: universalMargin,
    height: backButtonWidth,
    marginTop: 5,
  },
});
