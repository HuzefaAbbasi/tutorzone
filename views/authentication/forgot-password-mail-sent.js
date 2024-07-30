import {
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");
import TextButton from "../../components/auth_components/text-button";

export default function ForgotPasswordMailSent({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/icon-blue.png")}
          style={{ width: 40, height: 40, marginBottom: 20 }}
        ></Image>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <Text>
          We've sent reset password link to your email alisonh952@gmail.com
        </Text>
      </View>
      <View style={styles.body}>
        <View style={{ flex: 1 }}></View>
        <TextButton
          text={"Continue"}
          color={"#054BB4"}
          textColor={"#fff"}
          onPress={() => {
            navigation.navigate("PasswordChanged");
          }}
        ></TextButton>
        <TextButton
          text={"Back To Login"}
          color={"#fff"}
          textColor={"#33363B"}
          hasBorder={true}
          onPress={() => {
            navigation.navigate("Login");
          }}
        ></TextButton>
      </View>
    </View>
  );
}

const styles = {
  container: {
    padding: 20,
    backgroundColor: "#fff",
    width: width,
    flex: 1,
    height: height,
  },
  header: {
    marginTop: 68,
    height: height * 0.2,
    width: 306,
  },
  forgotPassword: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  body: {
    flex: 1,
  },

  or: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    flex: 1,
  },
  socialButtons: {
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
};
