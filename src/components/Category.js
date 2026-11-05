import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from "../theme";

export default function Category({ title, icon, color, selected, onPress }) {
  const { colors } = useTheme();
  const isLink = typeof icon === "string" && icon.startsWith("http");

  return (
    <Pressable style={styles.box} onPress={onPress}>
      <View
        style={[
          styles.circle,
          { backgroundColor: color },
          selected && { borderColor: colors.accent },
        ]}
      >
        {isLink ? (
          <Image source={{ uri: icon }} style={styles.image} />
        ) : (
          <Text style={styles.icon}>{icon}</Text>
        )}
      </View>
      <Text
        style={[
          styles.title,
          { color: colors.text },
          selected && { color: colors.accent, fontWeight: "bold" },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: { width: 70, alignItems: "center", marginRight: 10 },
  circle: {
    width: 55,
    height: 55,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  icon: { fontSize: 28 },
  image: { width: 35, height: 35 },
  title: { fontSize: 11, textAlign: "center", marginTop: 4 },
});