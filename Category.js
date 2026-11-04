import { View, Text, Image, StyleSheet } from "react-native";

export default function Category({ title, icon, color }) {
  const isLink = icon.startsWith("http");

  return (
    <View style={styles.box}>
      <View style={[styles.circle, { backgroundColor: color }]}>
        {isLink ? (
          <Image source={{ uri: icon }} style={styles.image} />
        ) : (
          <Text style={styles.icon}>{icon}</Text>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { width: 70, alignItems: "center", marginRight: 10 },
  circle: { width: 55, height: 55, borderRadius: 15, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 28 },
  image: { width: 35, height: 35 },
  title: { fontSize: 11, textAlign: "center", marginTop: 4 },
});