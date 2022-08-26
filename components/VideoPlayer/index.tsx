import { Video, ResizeMode } from "expo-av";
import React, { useEffect, useRef, useState } from "react";

import { Episode } from "../../types";
import styles from "./styles";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = ({ episode }: VideoPlayerProps) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);

  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: episode.video,
      }}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      posterSource={{
        uri: episode.poster,
      }}
      usePoster={true}
      posterStyle={{
        resizeMode: "cover",
      }}
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
};

export default VideoPlayer;
