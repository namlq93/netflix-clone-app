import { FlatList, Image } from "react-native";

import { Text, View } from "../../components/Themed";
import styles from "./styles";

interface homeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

export default function HomeCategory({ category }: homeCategoryProps) {
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
      />
    </>
  );
}
