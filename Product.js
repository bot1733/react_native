import { View, Text, StyleSheet } from "react-native";

export default function Product({ name, price, rating, icon }) {
  return (
    <View style={styles.card}>
      <Text style={styles.heart}>♡</Text>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price} ₴/кг</Text>
      <Text style={styles.rating}>⭐ {rating}</Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>🛒 Додати</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: "white", borderRadius: 12, padding: 10, margin: 5 },
  heart: { position: "absolute", right: 10, top: 8, fontSize: 18 },
  icon: { fontSize: 50, textAlign: "center", marginVertical: 8 },
  name: { fontWeight: "bold" },
  price: { fontWeight: "bold", marginTop: 2 },
  rating: { color: "gray", marginVertical: 4 },
  button: { backgroundColor: "green", borderRadius: 15, padding: 6, alignItems: "center" },
  buttonText: { color: "white" },
});