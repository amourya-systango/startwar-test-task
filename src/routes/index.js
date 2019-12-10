import {
  createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import List from '../screens/list/container';

// Configure screens navigation
const AppStackNavigator = createStackNavigator(
  {
    ListScreen: { screen: List }
  },
  { 
    initialRouteName: 'ListScreen',
    headerMode: 'none' 
  }
);

export default createAppContainer(AppStackNavigator);
