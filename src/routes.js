import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavBar from './components/footer';
import Main from "./pages/Main";
import RegisterExpense from './pages/RegisterExpense';
import ExpensesDetails from './pages/ExpensesDetails';
import Profile from './pages/Profile';

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
      <Tab.Screen name="Details" component={ExpensesDetails} />
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Profile" component={Profile} />
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