import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
export default function SocialButtons({ icon, text }) {
  return (
    <TouchableOpacity style={styles.socialButtons}>
      <Image source={icon} style={{ marginRight: 8 }}></Image>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
