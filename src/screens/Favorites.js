import { View, Text, FlatList, StyleSheet } from "react-native";
import FavoriteCard from "../components/FavoriteCard";
import { useTheme } from "../theme";

export default function Favorites({ items, onRemove }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Обране ⭐</Text>
      <Text style={[styles.small, { color: colors.subtext }]}>Товари, які ви зберегли</Text>

      <View style={[styles.banner, { backgroundColor: colors.accentSoft }]}>
        <Text style={[styles.bannerText, { color: colors.text }]}>
          У вас {items.length} улюблені товари
        </Text>
      </View>

      {items.length === 0 ? (
        <Text style={[styles.empty, { color: colors.subtext }]}>
          Поки що порожньо. Натисніть ☆ на головній сторінці.
        </Text>
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
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 15 },
  title: { fontSize: 22, fontWeight: "bold" },
  small: { fontSize: 12 },
  banner: { borderRadius: 12, padding: 14, marginVertical: 15 },
  bannerText: { fontWeight: "bold" },
  empty: { textAlign: "center", marginTop: 30 },
  row: { justifyContent: "space-between", marginBottom: 12 },
});