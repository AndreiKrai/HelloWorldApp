import { ImageData } from "@/types/pixabay";
import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface ImageCardProps {
  item: ImageData;
}

export default function ImageCard({ item }: ImageCardProps) {
  return (
    <View>
      <Image 
      source={{ uri: item.largeImageURL }} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    padding:20,
    borderRadius: 8,
    borderColor: "grey",
    borderBottomWidth: 1,
    height:300
  },
});
