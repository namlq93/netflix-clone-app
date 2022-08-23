import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import { View, Text } from "../Themed";
import styles from "./styles";

type Episode = {
  id: string;
  title: string;
  poster: string;
  duration: string;
  plot: string;
  video: string;
};

interface EpisodeItemProps {
  episode: Episode;
}

const EpisodeItem = ({ episode }: EpisodeItemProps) => {
  return (
    <View style={{ margin: 12 }}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </View>
  );
};

export default EpisodeItem;
