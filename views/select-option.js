import { View, Image, Text, ImageBackground } from "react-native";
import TextButton from "../components/auth_components/text-button";
export default function SelectOption({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={require("../assets/logovector.png")}
          style={{ width: 125, height: 62 }}
        ></Image>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Join as a Teacher or Student</Text>
        <OptionItem
          icon={require("../assets/teacher.png")}
          iconColor={"#054BB4"}
          text={"I am a Teacher"}
        ></OptionItem>
        <OptionItem
          icon={require("../assets/student.png")}
          iconColor={"#fff"}
          text={"I am a Student"}
        ></OptionItem>
      </View>
      <TextButton
        text={"Create Your Profile"}
        color={"#054BB4"}
        textColor={"#fff"}
      ></TextButton>
    </View>
  );
}

function OptionItem({ icon, iconColor, text }) {
  return (
    <View style={styles.optionItem}>
      <View style={[styles.iconBox, { backgroundColor: iconColor }]}>
        <Image source={icon} style={{ width: 24, height: 24 }}></Image>
      </View>
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
}

const styles = {
  imageBox: {
    marginTop: 99,
    alignItems: "center",
    marginBottom: 40,
  },
  container: {
    padding: 16,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  optionItem: {
    flexDirection: "row",
    backgroundColor: "#EBF0FC",
    height: 64,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: "center",
    padding: 16,
  },
  iconBox: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginRight: 16,
  },
};
