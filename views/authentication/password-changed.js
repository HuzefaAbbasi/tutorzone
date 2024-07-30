import { View, Image, TouchableOpacity, Text } from "react-native";
import TextButton from "../../components/auth_components/text-button";

export default function PasswordChanged({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image
          source={require("../../assets/password-changed.png")}
          style={{ width: 288, height: 148 }}
        ></Image>
      </View>
      <TextButton
        text={"Go Back to Login Page"}
        color={"#054BB4"}
        textColor={"#fff"}
        onPress={() => {
          navigation.navigate("Login");
        }}
      ></TextButton>
    </View>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    padding: 16,
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createAccount: {
    height: 48,
    backgroundColor: "#054BB4",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
};
