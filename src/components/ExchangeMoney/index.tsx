import React from "react";

import { Text, View } from "react-native";
import { styles } from "./styles";
import useMoneyValue from "../../store/useMoneyValue";
import { MoneyType } from "../../types/TypeMoney";

interface ExchangeMoneyProps {
  typeMoney: MoneyType;
  value: string;
}

const ExchangeMoney = ({ typeMoney, value }: ExchangeMoneyProps) => {
  const dolarValue = useMoneyValue((state) => state.dolar);
  const euroValue = useMoneyValue((state) => state.euro);

  function returnDataByTypeMoney(typeMoney) {
    switch (typeMoney) {
      case "dolar":
        return {
          flag: "🇺🇸",
          acronym: "USD",
          name: "dólar",
        };
      case "euro":
        return {
          flag: "🇪🇺",
          acronym: "EUR",
          name: "euro",
        };
    }
  }

  return (
    <View style={styles.boxValues}>
      <Text style={styles.title}>Valor em real</Text>
      <View style={styles.boxValue}>
        <View style={styles.flagAndText}>
          <View style={styles.flagBox}>
            <Text style={styles.flag}>🇧🇷</Text>
          </View>
          <Text style={styles.acronym}>BRL</Text>
        </View>

        <Text style={styles.valueMoney}>1.678,08</Text>
      </View>

      <Text style={styles.title}>
        Valor em {returnDataByTypeMoney(typeMoney).name}
      </Text>
      <View style={styles.boxValue}>
        <View style={styles.flagAndText}>
          <View style={styles.flagBox}>
            <Text style={styles.flag}>
              {returnDataByTypeMoney(typeMoney).flag}
            </Text>
          </View>
          <Text style={styles.acronym}>
            {returnDataByTypeMoney(typeMoney).acronym}
          </Text>
        </View>

        <Text style={styles.valueMoney}>1.678,08</Text>
      </View>
    </View>
  );
};

export default ExchangeMoney;

// <Text>🇺🇸</Text>
//           <Text>🇪🇺</Text>
