import { View, Text, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../theme";

export default function FavoriteCard({ name, price, unit, rating, reviews, icon, onRemove }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Pressable style={styles.starBox} onPress={onRemove}>
        <Text style={styles.star}>⭐</Text>
      </Pressable>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
      <Text style={[styles.price, { color: colors.text }]}>{price} грн/{unit}</Text>
      <Text style={[styles.rating, { color: colors.subtext }]}>
        Рейтинг: {rating} ({reviews})
      </Text>
      <View style={[styles.button, { backgroundColor: colors.accent }]}>
        <Text style={styles.buttonText}>🛒 Додати</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: "48%", borderRadius: 12, padding: 10 },
  starBox: { position: "absolute", top: 8, right: 8, zIndex: 1, padding: 4 },
  star: { fontSize: 22 },
  icon: { fontSize: 56, textAlign: "center", marginVertical: 8 },
  name: { fontWeight: "bold", fontSize: 13 },
  price: { fontSize: 12, marginTop: 2 },
  rating: { fontSize: 11, marginVertical: 4 },
  button: { borderRadius: 15, padding: 6, alignItems: "center" },
  buttonText: { color: "white", fontSize: 12 },
});