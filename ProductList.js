import { FlatList } from "react-native";
import Product from "./Product";

export default function ProductList({ data }) {
  return (
    <FlatList
      data={data}
      numColumns={2}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Product name={item.name} price={item.price} rating={item.rating} icon={item.icon} />
      )}
    />
  );
}