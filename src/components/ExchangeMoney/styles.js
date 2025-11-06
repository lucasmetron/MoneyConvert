import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    marginBottom: 5,
  },
  boxValue: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    flexDirection: "row",
    borderColor: "#D1D1D1",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },

  flagBox: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#D1D1D1",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },

  flagAndText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  acronym: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#818181",
  },

  valueMoney: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F1F1F",
  },

  flag: {
    fontSize: 25,
  },
});
