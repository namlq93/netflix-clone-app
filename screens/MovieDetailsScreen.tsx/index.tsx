import React, { useState } from "react";
import { FlatList, Image, Pressable } from "react-native";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

import styles from "./style";
import movie from "../../assets/data/movie";
import { View, Text } from "../../components/Themed";
import EpisodeItem from "../../components/EpisodeItem";
import { Picker } from "@react-native-picker/picker";

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

function MovieDetailScreen() {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const seasonNames = movie.seasons.items.map((season) => season.name);

  return (
    <FlatList
      data={currentSeason.episodes.items}
      renderItem={({ item }) => <EpisodeItem episode={item} />}
      ListHeaderComponent={
        <View>
          <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainers}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            {/* Play button */}
            <Pressable onPress={() => {}} style={styles.playButton}>
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={24} color="black" />
                Play
              </Text>
            </Pressable>

            {/* Download button */}
            <Pressable onPress={() => {}} style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>

            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/* Row with icon buttons */}
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Ionicons name="share-social" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>

            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
              style={{
                color: "white",
                marginTop: 10,
                width: 130,
              }}
              dropdownIconColor={"white"}
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </Picker>
          </View>
        </View>
      }
    />
  );
}

export default MovieDetailScreen;
