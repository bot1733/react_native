import { View, Text, Pressable, StyleSheet } from "react-native";

export default function FavoriteCard({ name, price, unit, rating, reviews, icon, onRemove }) {
  return (
    <View style={styles.card}>
      <Pressable style={styles.starBox} onPress={onRemove}>
        <Text style={styles.star}>⭐</Text>
      </Pressable>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price} грн/{unit}</Text>
      <Text style={styles.rating}>Рейтинг: {rating} ({reviews})</Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>🛒 Додати</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: "48%", backgroundColor: "white", borderRadius: 12, padding: 10 },
  starBox: { position: "absolute", top: 8, right: 8, zIndex: 1, padding: 4 },
  star: { fontSize: 22 },
  icon: { fontSize: 56, textAlign: "center", marginVertical: 8 },
  name: { fontWeight: "bold", fontSize: 13 },
  price: { fontSize: 12, marginTop: 2 },
  rating: { color: "gray", fontSize: 11, marginVertical: 4 },
  button: { backgroundColor: "green", borderRadius: 15, padding: 6, alignItems: "center" },
  buttonText: { color: "white", fontSize: 12 },
});