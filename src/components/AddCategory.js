import { useState } from "react";
import { View, Text, TextInput, Button, Modal, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../theme";

export default function AddCategory({ onAdd }) {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");

  const inputStyle = [
    styles.input,
    { backgroundColor: colors.input, borderColor: colors.border, color: colors.text },
  ];

  function handleAdd() {
    if (title === "") {
      return;
    }
    onAdd({
      id: Date.now().toString(),
      title: title,
      icon: icon === "" ? "📦" : icon,
      color: color === "" ? "#e3f6e8" : color,
    });
    setTitle("");
    setIcon("");
    setColor("");
    setVisible(false);
  }

  return (
    <View>
      <Pressable
        style={styles.plusButton}
        onPress={() => setVisible(true)}
        accessibilityLabel="Додати категорію"
      >
        <Text style={styles.plusText}>+</Text>
      </Pressable>

      <Modal visible={visible} animationType="slide" onRequestClose={() => setVisible(false)}>
        <View style={[styles.window, { backgroundColor: colors.background }]}>
          <Text style={[styles.header, { color: colors.text }]}>Category Screen</Text>
          <TextInput
            style={inputStyle}
            placeholder="title"
            placeholderTextColor={colors.subtext}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={inputStyle}
            placeholder="image"
            placeholderTextColor={colors.subtext}
            value={icon}
            onChangeText={setIcon}
          />
          <TextInput
            style={inputStyle}
            placeholder="color"
            placeholderTextColor={colors.subtext}
            value={color}
            onChangeText={setColor}
          />
          <Button title="ADD" onPress={handleAdd} />
          <View style={{ marginTop: 10 }}>
            <Button title="Cancel" color="gray" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  plusButton: {
    alignSelf: "flex-start",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2196f3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  plusText: { color: "white", fontSize: 26, fontWeight: "bold", marginTop: -2 },
  window: { flex: 1, justifyContent: "center", padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
});