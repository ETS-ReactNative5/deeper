import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Tabs from './navigation/tabs';

//import {Home, Community, Journal, Inbox, DailyCheckUp, Post_Screen, Entries, Messages} from './screens';
//import firebase from 'firebase/compat/app';
//import firebase from 'firebase/app'
//import * as firebase from 'firebase/app'
//import firebase from 'firebase';
//import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';

import { LogBox } from 'react-native';
//LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

const firebaseConfig = {
  apiKey: "AIzaSyAMxiQ75hoPDy6Dk2itUiT186iB8CW59AI",
  authDomain: "deeper-90de2.firebaseapp.com",
  projectId: "deeper-90de2",
  storageBucket: "deeper-90de2.appspot.com",
  messagingSenderId: "213050818012",
  appId: "1:213050818012:web:5b6f177c3772fe22662319",
  measurementId: "G-4CZX8KE10C"
};
//firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

import {Home, Community, Journal, Inbox, DailyCheckUp, Post_Screen, Entries, Messages, HealthIndex, OnboardingScreen, Splash, SignIn, SignUp} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Splash'}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="DailyCheckUp" component={DailyCheckUp} />
        <Stack.Screen name="HealthIndex" component={HealthIndex} />
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