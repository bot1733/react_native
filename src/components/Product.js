import { View, Text, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../theme";

export default function Product({ name, price, unit, rating, icon, isFavorite, onToggleFavorite, onAdd }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Pressable style={styles.starBox} onPress={onToggleFavorite}>
        <Text style={[styles.star, { color: colors.text }]}>{isFavorite ? "⭐" : "☆"}</Text>
      </Pressable>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={[styles.name, { color: colors.text }]} numberOfLines={2}>{name}</Text>
      <Text style={[styles.price, { color: colors.text }]}>{price} ₴/{unit}</Text>
      <Text style={[styles.rating, { color: colors.subtext }]}>Рейтинг: {rating}</Text>
      <Pressable style={[styles.button, { backgroundColor: colors.accent }]} onPress={onAdd}>
        <Text style={styles.buttonText}>🛒 Додати</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, borderRadius: 10, padding: 6, margin: 3 },
  starBox: { position: "absolute", right: 4, top: 2, zIndex: 1, padding: 4 },
  star: { fontSize: 16 },
  icon: { fontSize: 34, textAlign: "center", marginTop: 12, marginBottom: 4 },
  name: { fontWeight: "bold", fontSize: 11, minHeight: 28 },
  price: { fontWeight: "bold", fontSize: 11, marginTop: 2 },
  rating: { fontSize: 9, marginVertical: 3 },
  button: { borderRadius: 12, paddingVertical: 4, alignItems: "center" },
  buttonText: { color: "white", fontSize: 10 },
});