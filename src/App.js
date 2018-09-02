/**
 * 
 *
 * @format
 * @flow
 */

import {createStackNavigator} from 'react-navigation';

import Game from './game';
import Home from './home';
import Settings from './settings';
import Scores from './scores';

const App = createStackNavigator({
  Home: {screen: Home},
  Play: {screen: Game},
  Settings: {screen: Settings},
  Scores: {screen: Scores}
});

export default App;
