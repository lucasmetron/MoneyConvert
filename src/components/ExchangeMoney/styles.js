import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scollBox: {
    width: "100%",
  },
  boxValues: {
    width: "100%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#F7F7F7",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#515151",
  },
  boxValue: {
    borderColor: "#D1D1D1",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
  },

  flagBox: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D1D1D1",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },

  flag: {
    fontSize: 30,
  },

  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
