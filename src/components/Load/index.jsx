import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { styles } from "./styles";

const Load = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="gray" />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
};

export default Load;
