import React from "react";

import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import ExchangeMoney from "../ExchangeMoney";
import ShowExchangeText from "../ShowExchangeText";
import { MoneyType } from "../../types/TypeMoney";

interface PanelExchangeProps {
  typeMoney: MoneyType;
  value: string;
}

const PanelExchange = ({ typeMoney, value }: PanelExchangeProps) => {
  return (
    <ScrollView style={styles.scrollBox}>
      <View style={styles.container}>
        <View style={styles.box}>
          <ExchangeMoney />
          <ExchangeMoney />
        </View>

        <ShowExchangeText typeMoney={typeMoney} value={value} />
      </View>
    </ScrollView>
  );
};

export default PanelExchange;

// <Text>🇺🇸</Text>
//           <Text>🇪🇺</Text>
