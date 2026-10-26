import { useState } from "react";
import { View, Text, TextInput, Button, Modal, Pressable, StyleSheet } from "react-native";

export default function AddCategory({ onAdd }) {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");

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
      <Pressable style={styles.smallButton} onPress={() => setVisible(true)}>
        <Text style={styles.smallButtonText}>ADD</Text>
      </Pressable>

      <Modal visible={visible} animationType="slide" onRequestClose={() => setVisible(false)}>
        <View style={styles.window}>
          <Text style={styles.header}>Category Screen</Text>
          <TextInput style={styles.input} placeholder="title" value={title} onChangeText={setTitle} />
          <TextInput style={styles.input} placeholder="image" value={icon} onChangeText={setIcon} />
          <TextInput style={styles.input} placeholder="color" value={color} onChangeText={setColor} />
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
  smallButton: {
    alignSelf: "flex-start",
    backgroundColor: "#2196f3",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 10,
  },
  smallButtonText: { color: "white", fontWeight: "bold" },
  window: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f5f5f5" },
  header: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  input: { backgroundColor: "white", borderWidth: 1, borderColor: "gray", padding: 8, marginBottom: 10 },
});