import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get("window");
import LabelWithField from "../../components/auth_components/label-with-field";
import TextButton from "../../components/auth_components/text-button";

export default function ForgotPasswordSetNew() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/icon-blue.png")}
          style={{ width: 40, height: 40, marginBottom: 20 }}
        ></Image>
        <Text style={styles.forgotPassword}>Set A New Password</Text>
        <Text>
          New password must be different from your previous used passwords.
        </Text>
      </View>
      <View style={styles.body}>
        <LabelWithField
          label={"New Password"}
          placeholder={"Enter New Password"}
          image={require("../../assets/lock.png")}
        ></LabelWithField>
        <LabelWithField
          label={"Confirm New Password"}
          placeholder={"Enter Confirm New Password"}
          image={require("../../assets/lock.png")}
        ></LabelWithField>
        <View style={{ flex: 1 }}></View>

        <TextButton
          text={"Reset Password"}
          color={"#054BB4"}
          textColor={"#fff"}
        ></TextButton>
        <TextButton
          text={"Back To Log In"}
          color={"#fff"}
          textColor={"#33363B"}
          hasBorder={true}
        ></TextButton>
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
