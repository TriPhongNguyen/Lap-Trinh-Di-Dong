import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Giohang from "./Screen/Giohang";
import Shop from "./Screen/Shop";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Giohang}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="shop"
          component={Shop}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
