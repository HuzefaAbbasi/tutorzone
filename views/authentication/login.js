import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get("window");
import LabelWithField from "../../components/auth_components/label-with-field";
import SocialButtons from "../../components/auth_components/social-button";
import TextButton from "../../components/auth_components/text-button";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/icon-blue.png")}
          style={{ width: 40, height: 40, marginBottom: 20 }}
        ></Image>
        <Text style={styles.login}>Log In Now!</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
      <View>
        <LabelWithField
          label={"User Name or Email"}
          placeholder={"User Name or Email"}
          image={require("../../assets/user.png")}
        ></LabelWithField>
        <LabelWithField
          label={"Password"}
          placeholder={"Enter Password"}
          image={require("../../assets/lock.png")}
        ></LabelWithField>
        <Text
          onPress={() => {
            navigation.navigate("ForgotPasswordEmailEnter");
          }}
          style={styles.forgotPassword}
        >
          Forgot Password?
        </Text>
        <TextButton
          text={"Log In Your Account"}
          color={"#054BB4"}
          textColor={"#fff"}
          // onPress={(navigation) => {
          //   navigation.navigate("Home")
          // }}
        ></TextButton>

        <View style={styles.or}>
          <View style={styles.line}></View>
          <Text style={{ color: "gray" }}> OR </Text>
          <View style={styles.line}></View>
        </View>
        <SocialButtons
          icon={require("../../assets/google.png")}
          text={"Continue with Google"}
        ></SocialButtons>
        <SocialButtons
          icon={require("../../assets/facebook.png")}
          text={"Continue with Facebook"}
        ></SocialButtons>
      </View>
      <View style={styles.footer}>
        <Text style={{ color: "#8E8E8E", fontSize: 14 }}>
          Don't have an account?
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={{ color: "#054BB4", fontSize: 14 }}
        >
          {" "}
          Signup
        </Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    width: width,
    height: height,
  },
  header: {
    marginTop: 68,
    height: height * 0.2,
    width: 306,
  },
  login: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  forgotPassword: {
    textAlign: "right",
    textDecorationLine: "underline",
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

  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
};
