import { FlatList } from "react-native";
import Product from "./Product";

export default function ProductList({ data, favoriteIds, onToggleFavorite, onAddToCart }) {
  return (
    <FlatList
      data={data}
      extraData={favoriteIds}
      numColumns={2}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
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
      )}
    />
  );
}