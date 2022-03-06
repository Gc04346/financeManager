import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavBar from './components/footer';
import Main from "./pages/Main";
import RegisterExpense from './pages/RegisterExpense';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <NavBar {...props}/>}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="New" component={RegisterExpense} />
      <Tab.Screen name="Home" component={Main} />
    </Tab.Navigator>
  );
}

const Routes = () => {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}

export default Routes;