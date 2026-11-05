import { View, Text, Image, Switch, Pressable, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "../theme";

export default function Profile({ avatarUri, onChangeAvatar }) {
  const { colors, isDark, toggleTheme } = useTheme();

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      onChangeAvatar(result.assets[0].uri);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Профіль</Text>

      <View style={styles.avatarBox}>
        <Pressable onPress={pickImage} accessibilityLabel="Змінити фото профілю">
          <View style={[styles.avatar, { backgroundColor: colors.accentSoft }]}>
            {avatarUri ? (
              <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
            ) : (
              <Text style={styles.avatarIcon}>👤</Text>
            )}
          </View>
        </Pressable>
        <Text style={[styles.name, { color: colors.text }]}>Користувач</Text>

        <View style={styles.photoButtons}>
          <Pressable style={[styles.photoButton, { backgroundColor: colors.accent }]} onPress={pickImage}>
            <Text style={styles.photoButtonText}>
              {avatarUri ? "Змінити фото" : "Вибрати фото"}
            </Text>
          </Pressable>
          {avatarUri ? (
            <Pressable
              style={[styles.photoButton, { backgroundColor: colors.chip }]}
              onPress={() => onChangeAvatar(null)}
            >
              <Text style={[styles.photoButtonText, { color: colors.text }]}>Видалити</Text>
            </Pressable>
          ) : null}
        </View>
      </View>

      <Text style={[styles.section, { color: colors.subtext }]}>Оформлення</Text>
      <View style={[styles.row, { backgroundColor: colors.card }]}>
        <View style={styles.rowText}>
          <Text style={[styles.rowTitle, { color: colors.text }]}>Темна тема</Text>
          <Text style={[styles.rowSub, { color: colors.subtext }]}>
            Зараз: {isDark ? "темна" : "світла"}
          </Text>
        </View>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{ false: "#bbbbbb", true: colors.accent }}
          accessibilityLabel="Темна тема"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 15 },
  title: { fontSize: 22, fontWeight: "bold" },
  avatarBox: { alignItems: "center", marginVertical: 24 },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatarImage: { width: 110, height: 110 },
  avatarIcon: { fontSize: 50 },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  photoButtons: { flexDirection: "row", gap: 10, marginTop: 12 },
  photoButton: { borderRadius: 16, paddingVertical: 8, paddingHorizontal: 16 },
  photoButtonText: { color: "white", fontSize: 13, fontWeight: "bold" },
  section: { fontSize: 12, marginBottom: 8, marginLeft: 4 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 14,
  },
  rowText: { flex: 1 },
  rowTitle: { fontSize: 16, fontWeight: "bold" },
  rowSub: { fontSize: 12, marginTop: 2 },
});