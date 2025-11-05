import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Router from "./router/index";
import TabTeste from "./screens/TabTeste";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#afa" }}>
      <View style={styles.container}>
        <Router />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
