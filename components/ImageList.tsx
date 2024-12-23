import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import PixabayService from "../servises/pixabay";
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { ImageData } from "@/types/pixabay";

const MemoizedCard = React.memo(ImageCard);
interface MyFlatListProps {
  searchWord: string;
}

export default function MyFlatList({ searchWord }: MyFlatListProps) {
  const [data, setData] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    loadData(page);
  }, []);

  useEffect(() => {
    setData([]);
    loadData(page);
  }, [searchWord]);

  const loadData = async (page: number) => {
    setLoading(true);
    try {
      const images = await PixabayService.fetchImages(searchWord, page);
      if (images) {
        setData((prev)=>[...prev, ...images.hits])
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreData = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
      loadData(page + 1);
    }
  };
  return (

    <FlatList
      data={data}
      renderItem={({ item }) => <MemoizedCard item={item} />} 
      keyExtractor={(item) => item.id.toString()}
      onEndReached={loadMoreData}  
      onEndReachedThreshold={0.3}  
      showsVerticalScrollIndicator={false}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}  
    />
  );
}
const styles = StyleSheet.create({

	
});