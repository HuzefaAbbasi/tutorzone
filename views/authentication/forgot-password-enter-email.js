import {
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");
import LabelWithField from "../../components/auth_components/label-with-field";
import TextButton from "../../components/auth_components/text-button";

export default function ForgotPasswordEmailEnter({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/icon-blue.png")}
          style={{ width: 40, height: 40, marginBottom: 20 }}
        ></Image>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <Text>No worries, we'll send you instructions for reset</Text>
      </View>
      <View style={styles.body}>
        <LabelWithField
          label={"User Name or Email"}
          placeholder={"User Name or Email"}
          image={require("../../assets/user.png")}
        ></LabelWithField>
        <View style={{ flex: 1 }}></View>

        <TextButton
          text={"Reset Password"}
          color={"#054BB4"}
          textColor={"#fff"}
          onPress={() => {
            navigation.navigate("ForgotPasswordMailSent");
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
  backToLogin: {
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#33363B",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
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
