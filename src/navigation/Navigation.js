import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  // initialRouteName="Settings"
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
