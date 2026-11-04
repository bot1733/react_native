import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Product({ name, price, unit, rating, icon, isFavorite, onToggleFavorite, onAdd }) {
  return (
    <View style={styles.card}>
      <Pressable style={styles.starBox} onPress={onToggleFavorite}>
        <Text style={styles.star}>{isFavorite ? "⭐" : "☆"}</Text>
      </Pressable>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price} ₴/{unit}</Text>
      <Text style={styles.rating}>Рейтинг: {rating}</Text>
      <Pressable style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>🛒 Додати</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: "white", borderRadius: 12, padding: 10, margin: 5 },
  starBox: { position: "absolute", right: 10, top: 8, zIndex: 1, padding: 4 },
  star: { fontSize: 22 },
  icon: { fontSize: 50, textAlign: "center", marginVertical: 8 },
  name: { fontWeight: "bold" },
  price: { fontWeight: "bold", marginTop: 2 },
  rating: { color: "gray", marginVertical: 4 },
  button: { backgroundColor: "green", borderRadius: 15, padding: 6, alignItems: "center" },
  buttonText: { color: "white" },
});