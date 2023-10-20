import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

function Auhtnavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNavigation} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
export default Auhtnavigation;