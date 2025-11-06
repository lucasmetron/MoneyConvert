import React from "react";

import { View, Text } from "react-native";
import { styles } from "./styles";
import useMoneyValue from "../../store/useMoneyValue";

const EuroScreen = () => {
  const euroValue = useMoneyValue((state) => state.euro);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{euroValue}</Text>
    </View>
  );
};

export default EuroScreen;
