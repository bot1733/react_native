import { FlatList } from "react-native";
import Category from "./Category";

export default function CategoryList({ data }) {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category title={item.title} icon={item.icon} color={item.color} />
      )}
    />
  );
}