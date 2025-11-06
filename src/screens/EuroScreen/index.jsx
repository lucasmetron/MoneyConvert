import React from "react";

import { View } from "react-native";
import { styles } from "./styles";
import useMoneyValue from "../../store/useMoneyValue";
import PanelExchange from "../../components/PanelExchange";
import { formatNumbeToStringrBR } from "../../utils/funtions";

const EuroScreen = () => {
  const euroValue = useMoneyValue((state) => state.euro);

  return (
    <View style={styles.container}>
      <PanelExchange
        typeMoney="euro"
        value={formatNumbeToStringrBR(euroValue)}
      />
    </View>
  );
};

export default EuroScreen;
