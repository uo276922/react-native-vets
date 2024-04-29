import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../screens/account.screen";
const AccountStack = createStackNavigator();
export const AccountNavigator = () => (
  <AccountStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AccountStack.Screen name="MainScreen" component={AccountScreen} />
  </AccountStack.Navigator>
);
