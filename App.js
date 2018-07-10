/**
 * 
 *
 * @format
 * @flow
 */

import {createStackNavigator} from 'react-navigation';

import Game from './game';
import Home from './home';

const App = createStackNavigator({
  Home: {screen: Home},
  Play: {screen: Game},
});

export default App;
