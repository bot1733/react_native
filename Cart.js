import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Platform, useWindowDimensions } from "react-native";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

export default function Cart({ items, onChangeQty }) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const [promoPercent, setPromoPercent] = useState(0);

  // колір фону залежить від системи
  const backgroundColor = Platform.OS === "ios" ? "#e3f0ff" : "#e3f5e8";

  function applyPromo(code) {
    if (code === "FRESH") {
      setPromoPercent(10);
    } else {
      setPromoPercent(0);
    }
  }

  let subtotal = 0;
  for (const item of items) {
    subtotal = subtotal + item.price * item.qty;
  }
  const discount = Math.round((subtotal * promoPercent) / 100);
  const delivery = 0;
  const total = subtotal - discount + delivery;

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.title}>Ваш Кошик ({items.length})</Text>

      {items.length === 0 ? (
        <Text style={styles.empty}>Кошик порожній. Додайте товари на головній сторінці.</Text>
      ) : (
        <View style={[styles.body, isLandscape && styles.bodyLandscape]}>
          <ScrollView style={styles.list}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                unit={item.unit}
                icon={item.icon}
                qty={item.qty}
                onPlus={() => onChangeQty(item.id, 1)}
                onMinus={() => onChangeQty(item.id, -1)}
              />
            ))}
          </ScrollView>

          <CartSummary
            subtotal={subtotal}
            discount={discount}
            delivery={delivery}
            total={total}
            wide={isLandscape}
            onApplyPromo={applyPromo}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, paddingHorizontal: 15, paddingBottom: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  empty: { color: "gray", textAlign: "center", marginTop: 40 },
  body: { flex: 1 },
  bodyLandscape: { flexDirection: "row" },
  list: { flex: 1 },
});