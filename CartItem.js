import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CartItem({ name, price, unit, icon, qty, onPlus, onMinus }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price} ₴/{unit}</Text>
      </View>

      <View style={styles.counter}>
        <Pressable style={styles.button} onPress={onMinus} accessibilityLabel={"Зменшити " + name}>
          <Text style={styles.buttonText}>−</Text>
        </Pressable>
        <Text style={styles.qty}>{qty}</Text>
        <Pressable style={styles.button} onPress={onPlus} accessibilityLabel={"Збільшити " + name}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  icon: { fontSize: 40, marginRight: 12 },
  info: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 15 },
  price: { color: "gray", marginTop: 2 },
  counter: { flexDirection: "row", alignItems: "center" },
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { fontSize: 20, fontWeight: "bold" },
  qty: { width: 30, textAlign: "center", fontSize: 16 },
});