import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import axios from "axios";

import Router from "./router/index";
import useMoneyValue from "./store/useMoneyValue";
import Load from "./components/Load/index";

export default function App() {
  const [load, setLoad] = useState(true);
  const setEuro = useMoneyValue((state) => state.setEuro);
  const setDolar = useMoneyValue((state) => state.setDolar);

  //busca os dados de cambio ao iniciar o app
  useEffect(() => {
    (async () => {
      setLoad(true);
      await axios
        .get(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL`)
        .then((response) => {
          if (response.data.USDBRL) {
            setDolar(parseFloat(response.data.USDBRL.bid));
          }
          if (response.data.EURBRL) {
            setEuro(parseFloat(response.data.EURBRL.bid));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setLoad(false);
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>
          {load ? (
            <Load />
          ) : (
            <>
              <Router />
            </>
          )}

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
