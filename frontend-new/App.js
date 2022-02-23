import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Tabs from './navigation/tabs';
import {Home, Community, Journal, Inbox, DailyCheckUp, Post_Screen, Entries, Messages} from './screens';

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
        <Stack.Screen name="Post_Screen" component={Post_Screen} />
        <Stack.Screen name="Journal" component={Journal} />
        <Stack.Screen name="Entries" component={Entries} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;