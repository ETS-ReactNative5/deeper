import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_No_Connection_Error__1 from "./pages/Page_No_Connection_Error__1/Page_No_Connection_Error__1.js";
import Page_Splash from "./pages/Page_Splash/Page_Splash.js";
import Page_Sign_Up from "./pages/Page_Sign_Up/Page_Sign_Up.js";
import Page_Error from "./pages/Page_Error/Page_Error.js";
import Page_Login from "./pages/Page_Login/Page_Login.js";
import Page_Onboarding___1 from "./pages/Page_Onboarding___1/Page_Onboarding___1.js";
import Page_Text_Box_Active from "./pages/Page_Text_Box_Active/Page_Text_Box_Active.js";
import Page_Onboarding___2 from "./pages/Page_Onboarding___2/Page_Onboarding___2.js";
import Page_Onboarding___3 from "./pages/Page_Onboarding___3/Page_Onboarding___3.js";
import Page_Home from "./pages/Page_Home/Page_Home.js";
import Page_Friend_List from "./pages/Page_Friend_List/Page_Friend_List.js";
import Page_Journal_Entries from "./pages/Page_Journal_Entries/Page_Journal_Entries.js";
import Page_Daily_Check_Up from "./pages/Page_Daily_Check_Up/Page_Daily_Check_Up.js";
import Page_Health_Index from "./pages/Page_Health_Index/Page_Health_Index.js";
import Page_Settings_V1 from "./pages/Page_Settings_V1/Page_Settings_V1.js";
import Page_Community from "./pages/Page_Community/Page_Community.js";
import Page_Inbox from "./pages/Page_Inbox/Page_Inbox.js";
import Page_Journal from "./pages/Page_Journal/Page_Journal.js";
import Page_Login_1 from "./pages/Page_Login_1/Page_Login_1.js";
const Tab = createBottomTabNavigator();
const Page_No_Connection_Error__1StackNavigator = createStackNavigator();
const ScreenForPage_No_Connection_Error__1 = () => {
	return (
		<Page_No_Connection_Error__1StackNavigator.Navigator>
			<Page_No_Connection_Error__1StackNavigator.Screen
				name = "Page_No_Connection_Error__1"
				component = {Page_No_Connection_Error__1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_No_Connection_Error__1StackNavigator.Navigator>
	)
};
const Page_SplashStackNavigator = createStackNavigator();
const ScreenForPage_Splash = () => {
	return (
		<Page_SplashStackNavigator.Navigator>
			<Page_SplashStackNavigator.Screen
				name = "Page_Splash"
				component = {Page_Splash}
				options = {{
					headerShown: false
				}}
			/>
		</Page_SplashStackNavigator.Navigator>
	)
};
const Page_Sign_UpStackNavigator = createStackNavigator();
const ScreenForPage_Sign_Up = () => {
	return (
		<Page_Sign_UpStackNavigator.Navigator>
			<Page_Sign_UpStackNavigator.Screen
				name = "Page_Sign_Up"
				component = {Page_Sign_Up}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Sign_UpStackNavigator.Navigator>
	)
};
const Page_ErrorStackNavigator = createStackNavigator();
const ScreenForPage_Error = () => {
	return (
		<Page_ErrorStackNavigator.Navigator>
			<Page_ErrorStackNavigator.Screen
				name = "Page_Error"
				component = {Page_Error}
				options = {{
					headerShown: false
				}}
			/>
		</Page_ErrorStackNavigator.Navigator>
	)
};
const Page_LoginStackNavigator = createStackNavigator();
const ScreenForPage_Login = () => {
	return (
		<Page_LoginStackNavigator.Navigator>
			<Page_LoginStackNavigator.Screen
				name = "Page_Login"
				component = {Page_Login}
				options = {{
					headerShown: false
				}}
			/>
		</Page_LoginStackNavigator.Navigator>
	)
};
const Page_Onboarding___1StackNavigator = createStackNavigator();
const ScreenForPage_Onboarding___1 = () => {
	return (
		<Page_Onboarding___1StackNavigator.Navigator>
			<Page_Onboarding___1StackNavigator.Screen
				name = "Page_Onboarding___1"
				component = {Page_Onboarding___1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Onboarding___1StackNavigator.Navigator>
	)
};
const Page_Text_Box_ActiveStackNavigator = createStackNavigator();
const ScreenForPage_Text_Box_Active = () => {
	return (
		<Page_Text_Box_ActiveStackNavigator.Navigator>
			<Page_Text_Box_ActiveStackNavigator.Screen
				name = "Page_Text_Box_Active"
				component = {Page_Text_Box_Active}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Text_Box_ActiveStackNavigator.Navigator>
	)
};
const Page_Onboarding___2StackNavigator = createStackNavigator();
const ScreenForPage_Onboarding___2 = () => {
	return (
		<Page_Onboarding___2StackNavigator.Navigator>
			<Page_Onboarding___2StackNavigator.Screen
				name = "Page_Onboarding___2"
				component = {Page_Onboarding___2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Onboarding___2StackNavigator.Navigator>
	)
};
const Page_Onboarding___3StackNavigator = createStackNavigator();
const ScreenForPage_Onboarding___3 = () => {
	return (
		<Page_Onboarding___3StackNavigator.Navigator>
			<Page_Onboarding___3StackNavigator.Screen
				name = "Page_Onboarding___3"
				component = {Page_Onboarding___3}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Onboarding___3StackNavigator.Navigator>
	)
};
const Page_HomeStackNavigator = createStackNavigator();
const ScreenForPage_Home = () => {
	return (
		<Page_HomeStackNavigator.Navigator>
			<Page_HomeStackNavigator.Screen
				name = "Page_Home"
				component = {Page_Home}
				options = {{
					headerShown: false
				}}
			/>
		</Page_HomeStackNavigator.Navigator>
	)
};
const Page_Friend_ListStackNavigator = createStackNavigator();
const ScreenForPage_Friend_List = () => {
	return (
		<Page_Friend_ListStackNavigator.Navigator>
			<Page_Friend_ListStackNavigator.Screen
				name = "Page_Friend_List"
				component = {Page_Friend_List}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Friend_ListStackNavigator.Navigator>
	)
};
const Page_Journal_EntriesStackNavigator = createStackNavigator();
const ScreenForPage_Journal_Entries = () => {
	return (
		<Page_Journal_EntriesStackNavigator.Navigator>
			<Page_Journal_EntriesStackNavigator.Screen
				name = "Page_Journal_Entries"
				component = {Page_Journal_Entries}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Journal_EntriesStackNavigator.Navigator>
	)
};
const Page_Daily_Check_UpStackNavigator = createStackNavigator();
const ScreenForPage_Daily_Check_Up = () => {
	return (
		<Page_Daily_Check_UpStackNavigator.Navigator>
			<Page_Daily_Check_UpStackNavigator.Screen
				name = "Page_Daily_Check_Up"
				component = {Page_Daily_Check_Up}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Daily_Check_UpStackNavigator.Navigator>
	)
};
const Page_Health_IndexStackNavigator = createStackNavigator();
const ScreenForPage_Health_Index = () => {
	return (
		<Page_Health_IndexStackNavigator.Navigator>
			<Page_Health_IndexStackNavigator.Screen
				name = "Page_Health_Index"
				component = {Page_Health_Index}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Health_IndexStackNavigator.Navigator>
	)
};
const Page_Settings_V1StackNavigator = createStackNavigator();
const ScreenForPage_Settings_V1 = () => {
	return (
		<Page_Settings_V1StackNavigator.Navigator>
			<Page_Settings_V1StackNavigator.Screen
				name = "Page_Settings_V1"
				component = {Page_Settings_V1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Settings_V1StackNavigator.Navigator>
	)
};
const Page_CommunityStackNavigator = createStackNavigator();
const ScreenForPage_Community = () => {
	return (
		<Page_CommunityStackNavigator.Navigator>
			<Page_CommunityStackNavigator.Screen
				name = "Page_Community"
				component = {Page_Community}
				options = {{
					headerShown: false
				}}
			/>
		</Page_CommunityStackNavigator.Navigator>
	)
};
const Page_InboxStackNavigator = createStackNavigator();
const ScreenForPage_Inbox = () => {
	return (
		<Page_InboxStackNavigator.Navigator>
			<Page_InboxStackNavigator.Screen
				name = "Page_Inbox"
				component = {Page_Inbox}
				options = {{
					headerShown: false
				}}
			/>
		</Page_InboxStackNavigator.Navigator>
	)
};
const Page_JournalStackNavigator = createStackNavigator();
const ScreenForPage_Journal = () => {
	return (
		<Page_JournalStackNavigator.Navigator>
			<Page_JournalStackNavigator.Screen
				name = "Page_Journal"
				component = {Page_Journal}
				options = {{
					headerShown: false
				}}
			/>
		</Page_JournalStackNavigator.Navigator>
	)
};
const Page_Login_1StackNavigator = createStackNavigator();
const ScreenForPage_Login_1 = () => {
	return (
		<Page_Login_1StackNavigator.Navigator>
			<Page_Login_1StackNavigator.Screen
				name = "Page_Login_1"
				component = {Page_Login_1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Login_1StackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	const [isPage10Open, setIsPage10Open] = useState(false)
	const zIndexPage10 = useRef(2)
	const [isPage11Open, setIsPage11Open] = useState(false)
	const zIndexPage11 = useRef(2)
	const [isPage12Open, setIsPage12Open] = useState(false)
	const zIndexPage12 = useRef(2)
	const [isPage13Open, setIsPage13Open] = useState(false)
	const zIndexPage13 = useRef(2)
	const [isPage14Open, setIsPage14Open] = useState(false)
	const zIndexPage14 = useRef(2)
	const [isPage15Open, setIsPage15Open] = useState(false)
	const zIndexPage15 = useRef(2)
	const [isPage16Open, setIsPage16Open] = useState(false)
	const zIndexPage16 = useRef(2)
	const [isPage17Open, setIsPage17Open] = useState(false)
	const zIndexPage17 = useRef(2)
	const [isPage18Open, setIsPage18Open] = useState(false)
	const zIndexPage18 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_Splash"
							component = {ScreenForPage_Splash}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Sign_Up"
							component = {ScreenForPage_Sign_Up}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Error"
							component = {ScreenForPage_Error}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Login"
							component = {ScreenForPage_Login}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Onboarding___1"
							component = {ScreenForPage_Onboarding___1}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Text_Box_Active"
							component = {ScreenForPage_Text_Box_Active}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Onboarding___2"
							component = {ScreenForPage_Onboarding___2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Onboarding___3"
							component = {ScreenForPage_Onboarding___3}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Home"
							component = {ScreenForPage_Home}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Friend_List"
							component = {ScreenForPage_Friend_List}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Journal_Entries"
							component = {ScreenForPage_Journal_Entries}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Daily_Check_Up"
							component = {ScreenForPage_Daily_Check_Up}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Health_Index"
							component = {ScreenForPage_Health_Index}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Settings_V1"
							component = {ScreenForPage_Settings_V1}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Community"
							component = {ScreenForPage_Community}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Inbox"
							component = {ScreenForPage_Inbox}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Journal"
							component = {ScreenForPage_Journal}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Login_1"
							component = {ScreenForPage_Login_1}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

