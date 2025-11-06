import React from "react";

import { View, Text } from "react-native";
import { styles } from "./styles";
import useMoneyValue from "../../store/useMoneyValue";

const DolarScreen = () => {
  const dolarValue = useMoneyValue((state) => state.dolar);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dolarValue}</Text>
    </View>
  );
};

export default DolarScreen;
