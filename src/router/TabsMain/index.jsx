import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // ícones padrão do Expo
import { tabsScreens } from "../routes";
import DolarScreen from "../../screens/DolarScreen";
import EuroScreen from "../../screens/EuroScreen";

const Tab = createBottomTabNavigator();

export default function TabsMain() {
  return (
    <Tab.Navigator
      initialRouteName={tabsScreens.dolar}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#007aff", // azul iOS-style
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.2,
          height: 60,
          paddingBottom: 6,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === tabsScreens.dolar) {
            iconName = "logo-usd";
          }
          if (route.name === tabsScreens.euro) {
            iconName = "logo-euro";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={tabsScreens.dolar}
        component={DolarScreen}
        options={{ title: "Dólar" }}
      />
      <Tab.Screen
        name={tabsScreens.euro}
        component={EuroScreen}
        options={{ title: "Euro" }}
      />
    </Tab.Navigator>
  );
}
