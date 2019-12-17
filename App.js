import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './contaniner/Login'
import HomeScreen from './contaniner/Home'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  // Profile: {screen: ProfileScreen},
  Login: {screen : LoginScreen}
});

const App = createAppContainer(MainNavigator);

export default App;