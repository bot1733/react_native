import { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet } from "react-native";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import AddCategory from "../components/AddCategory";
import { products } from "../data/products";

const startCategories = [
  { id: "1", title: "Фрукти та овочі", icon: "🍏", color: "#d9f5e0" },
  { id: "2", title: "Молочні продукти", icon: "🥛", color: "#dbe9fb" },
  { id: "3", title: "М'ясо та риба", icon: "🥩", color: "#fcdcdc" },
  { id: "4", title: "Хліб та випічка", icon: "🥖", color: "#e8e0fa" },
  { id: "5", title: "Напої", icon: "🥤", color: "#fff1cc" },
];

export default function Main({ favoriteIds, onToggleFavorite, onAddToCart }) {
  const [categories, setCategories] = useState(startCategories);

  function addCategory(newCategory) {
    setCategories([...categories, newCategory]);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.hello}>Ласкаво просимо</Text>
      <Text style={styles.small}>Раді бачити тебе знову!</Text>

      <TextInput style={styles.search} placeholder="Пошук товарів..." />

      <Text style={styles.title}>Категорії</Text>
      <CategoryList data={categories} />

      <AddCategory onAdd={addCategory} />

      <Text style={styles.title}>Популярні товари</Text>
      <ProductList
        data={products}
        favoriteIds={favoriteIds}
        onToggleFavorite={onToggleFavorite}
        onAddToCart={onAddToCart}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 15, backgroundColor: "#f5f5f5" },
  hello: { fontSize: 20, fontWeight: "bold" },
  small: { color: "gray", fontSize: 12 },
  search: { backgroundColor: "white", borderRadius: 10, padding: 10, marginTop: 15 },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
});