import { FlatList, View } from "react-native";
import Product from "./Product";

const COLUMNS = 3;

export default function ProductList({ data, favoriteIds, onToggleFavorite, onAddToCart }) {
  const items = [...data];
  while (items.length % COLUMNS !== 0) {
    items.push({ id: "empty-" + items.length, empty: true });
  }

  return (
    <FlatList
      data={items}
      extraData={favoriteIds}
      numColumns={COLUMNS}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        if (item.empty) {
          return <View style={{ flex: 1, margin: 3 }} />;
        }
        return (
          <Product
            name={item.name}
            price={item.price}
            unit={item.unit}
            rating={item.rating}
            icon={item.icon}
            isFavorite={favoriteIds.includes(item.id)}
            onToggleFavorite={() => onToggleFavorite(item.id)}
            onAdd={() => onAddToCart(item.id)}
          />
        );
      }}
    />
  );
}