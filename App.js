import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Facebook from './screens/fb';
import Instagram from './screens/in';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}

const Navigator = createBottomTabNavigator({
  Facebook: {screen : Facebook},
  Instagram: {screen: Instagram},
})

const AppContainer = createAppContainer(Navigator);
