import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    borderRadius: 3,
  },
  titleContainer: {
    padding: 5,
    flex: 1,
  },
  title: {},
  duration: {
    color: "darkgrey",
    fontSize: 10,
  },
  plot: {
    color: "darkgrey",
  },
});

export default styles;
