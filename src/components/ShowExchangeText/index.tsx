import React from "react";

import { Text, View } from "react-native";
import { MoneyType } from "../../types/TypeMoney";
import { styles } from "./styles";

interface ShowExchangeTextProps {
  value: string;
  typeMoney: MoneyType;
}

const ShowExchangeText = ({ value, typeMoney }: ShowExchangeTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Cambio comercial</Text>

      <Text style={styles.textBold}>{`1 ${
        typeMoney === "dolar" ? "USD" : "EUR"
      } = BRL ${value}`}</Text>
    </View>
  );
};

export default ShowExchangeText;
