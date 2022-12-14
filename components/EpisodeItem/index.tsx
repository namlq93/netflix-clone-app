import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable } from "react-native";

import { Episode } from "../../types";
import { View, Text } from "../Themed";
import styles from "./styles";

interface EpisodeItemProps {
  episode: Episode;
  onPress: (episode: Episode) => void;
}

const EpisodeItem = ({ episode, onPress }: EpisodeItemProps) => {
  return (
    <Pressable style={{ margin: 12 }} onPress={() => onPress(episode)}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
};

export default EpisodeItem;
