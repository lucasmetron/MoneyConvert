import React from "react";

import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import useMoneyValue from "../../store/useMoneyValue";
import { Ionicons } from "@expo/vector-icons"; // ícones padrão do Expo

const ExchangeMoney = () => {
  const dolarValue = useMoneyValue((state) => state.dolar);
  const euroValue = useMoneyValue((state) => state.euro);

  return (
    <View style={styles.boxValues}>
      <Text style={styles.title}>Valor em real</Text>
      <View style={styles.boxValue}>
        <View style={styles.flagBox}>
          <Text style={styles.flag}>🇧🇷</Text>
        </View>
        <Text>real:{1}</Text>
      </View>

      <Text style={styles.title}>Valor em dolar</Text>
      <Text>dolar:{dolarValue}</Text>
      <Text>euro:{euroValue}</Text>
    </View>
  );
};

export default ExchangeMoney;

// <Text>🇺🇸</Text>
//           <Text>🇪🇺</Text>
