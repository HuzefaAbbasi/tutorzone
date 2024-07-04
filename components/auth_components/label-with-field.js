import { StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function LabelWithField({ label, placeholder, image }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textBox}>
        <TextInput
          style={styles.textinput}
          placeholder={placeholder}
        ></TextInput>
        <Image source={image}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 16, fontWeight: "500", marginBottom: 16 },
  textBox: {
    backgroundColor: "#F9F9F9",
    height: 48,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  textInput: {
    padding: 10,
  },
});
