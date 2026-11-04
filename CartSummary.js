import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function CartSummary({ subtotal, discount, delivery, total, wide, onApplyPromo }) {
  const [code, setCode] = useState("");

  return (
    <View style={[styles.box, wide && styles.boxWide]}>
      <Text style={styles.title}>Промокод</Text>
      <View style={styles.promoRow}>
        <TextInput
          style={styles.input}
          placeholder="Промокод"
          value={code}
          onChangeText={setCode}
          autoCapitalize="characters"
        />
        <Pressable style={styles.applyButton} onPress={() => onApplyPromo(code)}>
          <Text style={styles.applyText}>Застосувати</Text>
        </Pressable>
      </View>

      <Text style={styles.title}>Підсумок замовлення</Text>
      <View style={styles.row}>
        <Text>Субтотал</Text>
        <Text>{subtotal} ₴</Text>
      </View>
      <View style={styles.row}>
        <Text>Знижка</Text>
        <Text>-{discount} ₴</Text>
      </View>
      <View style={styles.row}>
        <Text>Доставка</Text>
        <Text>{delivery === 0 ? "безкоштовно" : delivery + " ₴"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.total}>Разом</Text>
        <Text style={styles.total}>{total} ₴</Text>
      </View>

      <Pressable style={styles.orderButton}>
        <Text style={styles.orderText}>Оформити замовлення</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: "white", borderRadius: 12, padding: 14, marginTop: 10 },
  boxWide: { width: 280, marginTop: 0, marginLeft: 12 },
  title: { fontWeight: "bold", marginBottom: 8, marginTop: 4 },
  promoRow: { flexDirection: "row", marginBottom: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  applyButton: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  applyText: { color: "white", fontSize: 12 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  total: { fontWeight: "bold", fontSize: 16 },
  orderButton: {
    backgroundColor: "green",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    marginTop: 10,
  },
  orderText: { color: "white", fontWeight: "bold" },
});