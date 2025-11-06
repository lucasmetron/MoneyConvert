import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window"); // largura da tela
const size = width * 0.12; // 10% da largura da tela (ajuste conforme quiser)

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
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
  },

  flagBox: {
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#D1D1D1",
    backgroundColor: "#FFFFFF",
    borderRadius: size / 2,
  },

  flagAndText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  flag: {
    fontSize: size / 2.1,
  },

  acronym: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#818181",
  },

  valueMoney: {
    width: "auto",
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F1F1F",
  },
});
