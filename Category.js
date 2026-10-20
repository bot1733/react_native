import { View, Text, StyleSheet } from "react-native";

export default function Category({ title, icon, color }) {
  return (
    <View style={styles.box}>
      <View style={[styles.circle, { backgroundColor: color }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { width: 70, alignItems: "center", marginRight: 10 },
  circle: { width: 55, height: 55, borderRadius: 15, alignItems: "center", justifyContent: "center" },
  icon: { fontSize: 28 },
  title: { fontSize: 11, textAlign: "center", marginTop: 4 },
});