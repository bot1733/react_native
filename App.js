import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Main from "./src/screens/Main";
import Favorites from "./src/screens/Favorites";
import Cart from "./src/screens/Cart";
import Profile from "./src/screens/Profile";
import { products } from "./src/data/products";
import { ThemeContext, lightColors, darkColors } from "./src/theme";

const tabs = [
  { name: "main", label: "Головна", icon: "home" },
  { name: "favorites", label: "Обране", icon: "star" },
  { name: "cart", label: "Кошик", icon: "cart" },
  { name: "profile", label: "Профіль", icon: "person" },
];

export default function App() {
  const [screen, setScreen] = useState("main");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [cart, setCart] = useState([]);
  const [avatarUri, setAvatarUri] = useState(null);
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === "dark");
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const colors = isDark ? darkColors : lightColors;

  function toggleTheme() {
    setIsDark(!isDark);
  }

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
  if (screen === "profile") {
    content = <Profile avatarUri={avatarUri} onChangeAvatar={setAvatarUri} />;
  }

  return (
    <ThemeContext.Provider value={{ colors, isDark, toggleTheme }}>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.background },
          isLandscape && styles.containerLandscape,
        ]}
      >
        <View style={styles.content}>{content}</View>

        <View
          style={[
            styles.tabs,
            { backgroundColor: colors.tabBar },
            isLandscape && styles.tabsLandscape,
          ]}
        >
          {tabs.map((tab) => {
            const active = screen === tab.name;
            const color = active ? colors.accent : colors.subtext;
            return (
              <Pressable
                key={tab.name}
                style={styles.tab}
                onPress={() => setScreen(tab.name)}
                accessibilityLabel={tab.label}
              >
                <Ionicons
                  name={active ? tab.icon : tab.icon + "-outline"}
                  size={24}
                  color={color}
                />
                <Text
                  style={[styles.tabLabel, { color: color }, active && styles.tabLabelActive]}
                  numberOfLines={1}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  containerLandscape: { flexDirection: "row-reverse" },
  content: { flex: 1 },
  tabs: { flexDirection: "row", paddingBottom: 20, paddingTop: 8 },
  tabsLandscape: { flexDirection: "column", width: 110, paddingTop: 30, justifyContent: "flex-start" },
  tab: { flex: 1, alignItems: "center", justifyContent: "center" },
  tabLabel: { fontSize: 11, marginTop: 2 },
  tabLabelActive: { fontWeight: "bold" },
});