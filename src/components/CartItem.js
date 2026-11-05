import { View, Text, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../theme";

export default function CartItem({ name, price, unit, icon, qty, onPlus, onMinus }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={styles.icon}>{icon}</Text>

      <View style={styles.info}>
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.price, { color: colors.subtext }]}>{price} ₴/{unit}</Text>
      </View>

      <View style={styles.counter}>
        <Pressable
          style={[styles.button, { backgroundColor: colors.chip }]}
          onPress={onMinus}
          accessibilityLabel={"Зменшити " + name}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>−</Text>
        </Pressable>
        <Text style={[styles.qty, { color: colors.text }]}>{qty}</Text>
        <Pressable
          style={[styles.button, { backgroundColor: colors.chip }]}
          onPress={onPlus}
          accessibilityLabel={"Збільшити " + name}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  icon: { fontSize: 40, marginRight: 12 },
  info: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 15 },
  price: { marginTop: 2 },
  counter: { flexDirection: "row", alignItems: "center" },
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { fontSize: 20, fontWeight: "bold" },
  qty: { width: 30, textAlign: "center", fontSize: 16 },
});