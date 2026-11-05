import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../theme";

export default function CartSummary({ subtotal, discount, delivery, total, wide, onApplyPromo }) {
  const { colors } = useTheme();
  const [code, setCode] = useState("");
  const textColor = { color: colors.text };

  return (
    <View style={[styles.box, { backgroundColor: colors.card }, wide && styles.boxWide]}>
      <Text style={[styles.title, textColor]}>Промокод</Text>
      <View style={styles.promoRow}>
        <TextInput
          style={[styles.input, { borderColor: colors.border, color: colors.text, backgroundColor: colors.input }]}
          placeholder="Промокод"
          placeholderTextColor={colors.subtext}
          value={code}
          onChangeText={setCode}
          autoCapitalize="characters"
        />
        <Pressable
          style={[styles.applyButton, { backgroundColor: colors.accent }]}
          onPress={() => onApplyPromo(code)}
        >
          <Text style={styles.applyText}>Застосувати</Text>
        </Pressable>
      </View>

      <Text style={[styles.title, textColor]}>Підсумок замовлення</Text>
      <View style={styles.row}>
        <Text style={textColor}>Субтотал</Text>
        <Text style={textColor}>{subtotal} ₴</Text>
      </View>
      <View style={styles.row}>
        <Text style={textColor}>Знижка</Text>
        <Text style={textColor}>-{discount} ₴</Text>
      </View>
      <View style={styles.row}>
        <Text style={textColor}>Доставка</Text>
        <Text style={textColor}>{delivery === 0 ? "безкоштовно" : delivery + " ₴"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.total, textColor]}>Разом</Text>
        <Text style={[styles.total, textColor]}>{total} ₴</Text>
      </View>

      <Pressable style={[styles.orderButton, { backgroundColor: colors.accent }]}>
        <Text style={styles.orderText}>Оформити замовлення</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { borderRadius: 12, padding: 14, marginTop: 10 },
  boxWide: { width: 280, marginTop: 0, marginLeft: 12 },
  title: { fontWeight: "bold", marginBottom: 8, marginTop: 4 },
  promoRow: { flexDirection: "row", marginBottom: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  applyButton: {
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  applyText: { color: "white", fontSize: 12 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  total: { fontWeight: "bold", fontSize: 16 },
  orderButton: {
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    marginTop: 10,
  },
  orderText: { color: "white", fontWeight: "bold" },
});