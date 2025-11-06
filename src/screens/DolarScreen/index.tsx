import React from "react";

import { View } from "react-native";
import { styles } from "./styles";
import PanelExchange from "../../components/PanelExchange";
import useMoneyValue from "../../store/useMoneyValue";
import { formatNumbeToStringrBR } from "../../utils/funtions";

const DolarScreen = () => {
  const dolarValue = useMoneyValue((state) => state.dolar);
  return (
    <View style={styles.container}>
      <PanelExchange
        typeMoney="dolar"
        value={formatNumbeToStringrBR(dolarValue)}
      />
    </View>
  );
};

export default DolarScreen;
