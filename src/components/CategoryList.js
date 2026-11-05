import { FlatList } from "react-native";
import Category from "./Category";

export default function CategoryList({ data, selectedId, onSelect }) {
  return (
    <FlatList
      data={data}
      extraData={selectedId}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          title={item.title}
          icon={item.icon}
          color={item.color}
          selected={item.id === selectedId}
          onPress={() => onSelect(item.id)}
        />
      )}
    />
  );
}