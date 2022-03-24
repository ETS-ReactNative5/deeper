import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { Home } from "../screens";
import { Community } from "../screens";
import { Journal } from "../screens";
import { Inbox } from "../screens";

import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
            screenOptions={{
                headerShown: false 
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Community"
                component={Community}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.globe}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Journal"
                component={Journal}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.pencil}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;