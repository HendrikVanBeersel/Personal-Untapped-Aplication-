import { StyleSheet, Image, View } from "react-native";

export default function Yggdrasil(props) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00A877",
    },
    image: {
      resizeMode: "contain",
      maxWidth: "90%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00A877",
    },
  });
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./Yggdrasil.png")} />
    </View>
  );
}
