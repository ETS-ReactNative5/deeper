import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Tabs from './navigation/tabs';
import {Home, Community, Journal, Inbox, DailyCheckUp} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="DailyCheckUp" component={DailyCheckUp} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Journal" component={Journal} />
        <Stack.Screen name="Inbox" component={Inbox} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;