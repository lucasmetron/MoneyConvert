import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mainStacks } from "../routes";
import Login from "../../screens/Login/index";
import TabTeste from "../../screens/TabTeste/index";

const Stack = createNativeStackNavigator();

export default function StackMain() {
  return (
    <Stack.Navigator
      initialRouteName={"tabs"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"tabs"} component={TabTeste} />
      <Stack.Screen name={mainStacks.login} component={Login} />
    </Stack.Navigator>
  );
}
