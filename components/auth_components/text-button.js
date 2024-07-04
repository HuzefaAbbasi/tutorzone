import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TextButton({
  text,
  color,
  textColor,
  hasBorder,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        hasBorder ? { borderWidth: 1, borderColor: "#33363B" } : null,
        { backgroundColor: color },
      ]}
    >
      <Text style={{ color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
});
