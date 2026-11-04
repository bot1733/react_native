import { useState } from "react";
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import Main from "./src/screens/Main";
import Favorites from "./src/screens/Favorites";
import Cart from "./src/screens/Cart";
import { products } from "./src/data/products";

export default function App() {
  const [screen, setScreen] = useState("main");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [cart, setCart] = useState([]);
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  function toggleFavorite(id) {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  }

  function addToCart(id) {
    const found = cart.find((item) => item.id === id);
    if (found) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  }

  function changeQty(id, step) {
    const newCart = cart
      .map((item) => (item.id === id ? { ...item, qty: item.qty + step } : item))
      .filter((item) => item.qty > 0);
    setCart(newCart);
  }

  const favoriteItems = products.filter((item) => favoriteIds.includes(item.id));

  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return { ...product, qty: item.qty };
  });

  let cartCount = 0;
  for (const item of cart) {
    cartCount = cartCount + item.qty;
  }

  let content = (
    <Main
      favoriteIds={favoriteIds}
      onToggleFavorite={toggleFavorite}
      onAddToCart={addToCart}
    />
  );
  if (screen === "favorites") {
    content = <Favorites items={favoriteItems} onRemove={toggleFavorite} />;
  }
  if (screen === "cart") {
    content = <Cart items={cartItems} onChangeQty={changeQty} />;
  }

  return (
    <View style={[styles.container, isLandscape && styles.containerLandscape]}>
      <View style={styles.content}>{content}</View>

      <View style={[styles.tabs, isLandscape && styles.tabsLandscape]}>
        <Pressable style={styles.tab} onPress={() => setScreen("main")}>
          <Text style={screen === "main" ? styles.active : styles.text}>🏠 Головна</Text>
        </Pressable>
        <Pressable style={styles.tab} onPress={() => setScreen("favorites")}>
          <Text style={screen === "favorites" ? styles.active : styles.text}>
            ⭐ Обране ({favoriteIds.length})
          </Text>
        </Pressable>
        <Pressable style={styles.tab} onPress={() => setScreen("cart")}>
          <Text style={screen === "cart" ? styles.active : styles.text}>
            🛒 Кошик ({cartCount})
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  containerLandscape: { flexDirection: "row-reverse" },
  content: { flex: 1 },
  tabs: { flexDirection: "row", backgroundColor: "white", paddingBottom: 20, paddingTop: 10 },
  tabsLandscape: { flexDirection: "column", width: 110, paddingTop: 30, justifyContent: "flex-start" },
  tab: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { color: "gray" },
  active: { color: "green", fontWeight: "bold" },
});