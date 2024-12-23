import { ThemedText } from "@/components/ThemedText";
import { typedStorage } from "@/servises/storage";
import { getRandomColor } from "@/utils/getRandomColor";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
export default function HomeScreen() {
  const [backgroundColor, setBackgroundColor] =
    useState<string>("rgb(255,255,255)");

  useEffect(() => {
    loadInitialColor();
  }, []);


  const loadInitialColor = async () => {
    try {
      const backgroundColor = await typedStorage.getItem("backgroundColor");
      if (backgroundColor) setBackgroundColor(backgroundColor);
    } catch (error) {
      console.error("Failed to load background color:", error);
    }
  };

  const handleChangeColor = async () => {
    const color = getRandomColor();
    setBackgroundColor(color);
    typedStorage.setItem("backgroundColor", color);
  };

  return (
    <TouchableOpacity
      onPress={handleChangeColor}
      style={[styles.container, { backgroundColor }]}
      activeOpacity={1}
    >
      <ThemedText type="title">Hello World!</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
