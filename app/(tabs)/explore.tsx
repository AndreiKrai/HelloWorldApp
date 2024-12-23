import ImageCard from "@/components/ImageCard";
import MyFlatList from "@/components/ImageList";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useRef, useState } from "react";  

import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";

export default function TabTwoScreen() {
  const textInputRef = useRef(null);
  const [inputPhrase, setInputPhrase] = useState<string>("");
  const [msgSearchPhrase, setMsgSearchPhrase] = useState<string | null>(null);

  const handleSearch = () => {
    if (inputPhrase.length === 0) {
      return;
    }
    setMsgSearchPhrase(inputPhrase);
    
  };
  return (
    <SafeAreaView>
      <ThemedView style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={inputPhrase}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          ref={textInputRef}
          onChangeText={(text) => {
            setInputPhrase(text);
          }}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <IconSymbol size={28} name="magnifyingglass" color={Colors.light.tint} />
        </TouchableOpacity>
      </ThemedView>
      {msgSearchPhrase && <MyFlatList searchWord={msgSearchPhrase} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,paddingVertical:10
  },
  input: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor:Colors.light.tint,
    height: 30,
  },
  button: {
    height: 30,
  },
});
