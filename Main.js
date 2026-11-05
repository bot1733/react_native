import { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet } from "react-native";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import AddCategory from "../components/AddCategory";
import { products } from "../data/products";
import { useTheme } from "../theme";

const startCategories = [
  { id: "1", title: "Фрукти та овочі", icon: "🍏", color: "#d9f5e0" },
  { id: "2", title: "Молочні продукти", icon: "🥛", color: "#dbe9fb" },
  { id: "3", title: "М'ясо та риба", icon: "🥩", color: "#fcdcdc" },
  { id: "4", title: "Хліб та випічка", icon: "🥖", color: "#e8e0fa" },
  { id: "5", title: "Напої", icon: "🥤", color: "#fff1cc" },
];

export default function Main({ favoriteIds, onToggleFavorite, onAddToCart }) {
  const { colors } = useTheme();
  const [categories, setCategories] = useState(startCategories);
  const [selectedId, setSelectedId] = useState(null);

  function addCategory(newCategory) {
    setCategories([...categories, newCategory]);
  }

  function selectCategory(id) {
    if (id === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  let shownProducts = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 6);
  let listTitle = "Популярні товари";
  if (selectedId !== null) {
    shownProducts = products.filter((item) => item.categoryId === selectedId);
    const selectedCategory = categories.find((item) => item.id === selectedId);
    listTitle = selectedCategory.title;
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        style={[styles.search, { backgroundColor: colors.input, color: colors.text }]}
        placeholder="Пошук товарів..."
        placeholderTextColor={colors.subtext}
      />

      <Text style={[styles.title, { color: colors.text }]}>Категорії</Text>
      <CategoryList data={categories} selectedId={selectedId} onSelect={selectCategory} />

      <AddCategory onAdd={addCategory} />

      <Text style={[styles.title, { color: colors.text }]}>{listTitle}</Text>
      {shownProducts.length === 0 ? (
        <Text style={[styles.empty, { color: colors.subtext }]}>
          У цій категорії поки немає товарів.
        </Text>
      ) : (
        <ProductList
          data={shownProducts}
          favoriteIds={favoriteIds}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={onAddToCart}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 15 },
  search: { borderRadius: 10, padding: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
  empty: { textAlign: "center", marginTop: 20 },
});