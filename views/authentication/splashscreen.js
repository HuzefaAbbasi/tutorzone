import { Image, Dimensions, View } from "react-native";
import { useEffect } from "react";
const { width, height } = Dimensions.get("window");

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/splashscreen.png")}
        style={{ width: width, height: height }}
      ></Image>
    </View>
  );
}
