import { View, Text, FlatList, StyleSheet } from "react-native";
import FavoriteCard from "../components/FavoriteCard";

export default function Favorites({ items, onRemove }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Обране ⭐</Text>
      <Text style={styles.small}>Товари, які ви зберегли</Text>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>У вас {items.length} улюблені товари</Text>
      </View>

      {items.length === 0 ? (
        <Text style={styles.empty}>Поки що порожньо. Натисніть ☆ на головній сторінці.</Text>
      ) : (
        <FlatList
          data={items}
          numColumns={2}
          columnWrapperStyle={styles.row}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FavoriteCard {...item} onRemove={() => onRemove(item.id)} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 15, backgroundColor: "#f5f5f5" },
  title: { fontSize: 22, fontWeight: "bold" },
  small: { color: "gray", fontSize: 12 },
  banner: { backgroundColor: "#d9f5e0", borderRadius: 12, padding: 14, marginVertical: 15 },
  bannerText: { fontWeight: "bold" },
  empty: { color: "gray", textAlign: "center", marginTop: 30 },
  row: { justifyContent: "space-between", marginBottom: 12 },
});