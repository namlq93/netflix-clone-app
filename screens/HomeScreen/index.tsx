import { FlatList, Image } from "react-native";

import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import categories from "../../assets/data/categories";
import styles from "./styles";
import HomeCategory from "../../components/HomeCategory";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
}
