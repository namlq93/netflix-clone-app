import { FlatList, Image, Pressable } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { Text } from "../../components/Themed";
import styles from "./styles";

type Movie = {
  id: string;
  poster: string;
};
interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: Movie[];
  };
  // thằng navigation này ở component con không phải trong component screen nên phải truyền từ thằng screen sang
  // navigation: NavigationProp<any, any>;
}

export default function HomeCategory({
  category,
}: // navigation,
HomeCategoryProps) {
  // cách khác không cần truyền props, sử dụng useNavigation
  const navigation = useNavigation();
  const handlePressMovie = (movie: Movie) => {
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
  };

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePressMovie(item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            />
          </Pressable>
        )}
        horizontal
      />
    </>
  );
}
