/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Router from './router'
import { createStackNavigator } from 'react-navigation';

// type Props = {};
// export default class App extends Component<Props> {
//
//   render() {
//     return (
//         <Router />
//     );
//   }
// }
export default createStackNavigator({
    Home: Router,
},{
    headerMode :'none'
});

