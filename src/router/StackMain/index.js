import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mainStacks } from "../routes";
import Login from "../../screens/Login/index";
import TabsMain from "../TabsMain";

const Stack = createNativeStackNavigator();

export default function StackMain() {
  return (
    <Stack.Navigator
      initialRouteName={mainStacks.tabs}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={mainStacks.tabs} component={TabsMain} />
      <Stack.Screen name={mainStacks.login} component={Login} />
    </Stack.Navigator>
  );
}
