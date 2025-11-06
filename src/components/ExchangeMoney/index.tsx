import React from "react";

import { Text, View, TextInput, Platform } from "react-native";
import { styles } from "./styles";
import useMoneyValue from "../../store/useMoneyValue";
import { MoneyType } from "../../types/TypeMoney";
import { convertCurrency, formatMoneyInput } from "../../utils/funtions";

interface ExchangeMoneyProps {
  typeMoney: MoneyType;
  valueForeing: string;
}

const ExchangeMoney = ({ typeMoney, valueForeing }: ExchangeMoneyProps) => {
  const [valueReal, setValueReal] = React.useState("0,00");
  const [valueMoney, setValueMoney] = React.useState(valueForeing);

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

        <TextInput
          style={styles.valueMoney}
          keyboardType={Platform.OS === "ios" ? "decimal-pad" : "numeric"}
          maxLength={10}
          value={valueReal}
          onChangeText={(text) => {
            const formatted = formatMoneyInput(text);
            setValueReal(formatted);
            setValueMoney(convertCurrency(formatted, valueForeing, "brl"));
          }}
        />
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

        <TextInput
          style={styles.valueMoney}
          keyboardType={Platform.OS === "ios" ? "decimal-pad" : "numeric"}
          maxLength={10}
          value={valueMoney}
          onChangeText={(text) => {
            const formatted = formatMoneyInput(text);
            setValueMoney(formatted);
            setValueReal(convertCurrency(formatted, valueForeing, "foreing"));
          }}
        />
      </View>
    </View>
  );
};

export default ExchangeMoney;
