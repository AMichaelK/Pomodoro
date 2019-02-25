import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainStack from './AppNavigator'
import ModalScreen from '../screens/ModalScreen';

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;