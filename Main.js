import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

const categories = [
  { id: "1", title: "Фрукти та овочі", icon: "🍏", color: "#d9f5e0" },
  { id: "2", title: "Молочні продукти", icon: "🥛", color: "#dbe9fb" },
  { id: "3", title: "М'ясо та риба", icon: "🥩", color: "#fcdcdc" },
  { id: "4", title: "Хліб та випічка", icon: "🥖", color: "#e8e0fa" },
  { id: "5", title: "Напої", icon: "🥤", color: "#fff1cc" },
];

const products = [
  { id: "1", name: "Банани", price: 59, rating: 4.8, icon: "🍌" },
  { id: "2", name: "Помідори", price: 89, rating: 4.8, icon: "🍅" },
];

export default function Main() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.hello}>Добро пожаловать</Text>
      <Text style={styles.small}>Раді бачити тебе знову!</Text>

      <TextInput style={styles.search} placeholder="Пошук товарів..." />

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Свіжі продукти для вашого столу</Text>
        <Text style={styles.small}>Овочі, фрукти, молочні продукти та багато іншого</Text>
      </View>

      <Text style={styles.title}>Категорії</Text>
      <CategoryList data={categories} />

      <Text style={styles.title}>Популярні товари</Text>
      <ProductList data={products} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 15, backgroundColor: "#f5f5f5" },
  hello: { fontSize: 20, fontWeight: "bold" },
  small: { color: "gray", fontSize: 12 },
  search: { backgroundColor: "white", borderRadius: 10, padding: 10, marginTop: 15 },
  banner: { backgroundColor: "#d9f5e0", borderRadius: 15, padding: 20, marginTop: 15 },
  bannerTitle: { fontSize: 18, fontWeight: "bold" },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
});