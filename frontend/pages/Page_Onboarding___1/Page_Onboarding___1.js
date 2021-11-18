import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Lifesavers___Online_1_link} from './assets/imageLinks.js'
const Page_Onboarding___1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Skip_Button = () => {
					navigation.navigate("Page_Home")
	}
	const onClick_Lifesavers___Online_1_container = () => {
					navigation.navigate("Page_Onboarding___2")
	}
	return (
	//<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	//<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page5]}    >
			<View style = {noneModeStyles._Text}    >
				<View style = {noneModeStyles._Indicators}    >
					<View style = {noneModeStyles._Active}    >
					</View>
					<View style = {noneModeStyles._Default}    >
					</View>
					<View style = {noneModeStyles._Default_2}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Ask_and_share}   >
					Ask and share
				</Text>
				<Text style = {noneModeStyles._With_the_community_tab__you_can_ask_questions_anonymously_or_unanonymously_to_our_diverse_and_open_minded_community__as_well_as_join_conversations_to_share_your_own_thoughts_}   >
					With the community tab, you can ask questions anonymously or unanonymously to our diverse and open-minded community, as well as join conversations to share your own thoughts.
				</Text>
				<View style = {noneModeStyles._Skip_Button}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Skip_Button();}} onStartShouldSetResponderCapture = {() => true}>
					<Text style = {noneModeStyles._Skip_Tour}   >
						Skip Tour
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Lifesavers___Online_1_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Lifesavers___Online_1_container();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Lifesavers___Online_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers___Online_1_link}}/>
				</View>
			</View>
		</Animated.View>
	//</ScrollView>
	//</KeyboardAvoidingView>
)}
export default Page_Onboarding___1

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Text: {
	width: "auto",
	height: 178,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	//position: "absolute",
	left: -1,
	top: 425,
	right: 20,
	},
_Indicators: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginBottom: 16,
	paddingTop: 8,
	},
_Active: {
	width: 6,
	height: 6,
	flexShrink: 0,
	marginRight: 6,
	},
_Default: {
	width: 6,
	height: 6,
	flexShrink: 0,
	marginRight: 6,
	},
_Default_2: {
	width: 6,
	height: 6,
	flexShrink: 0,
	},
_Ask_and_share: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	marginTop: -50,
	marginBottom: 16,
	color: "rgb(67, 44, 129)",
	fontSize: 32,
	fontWeight: "700",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_With_the_community_tab__you_can_ask_questions_anonymously_or_unanonymously_to_our_diverse_and_open_minded_community__as_well_as_join_conversations_to_share_your_own_thoughts_: {
	width: "100%",
	height: 115,
	flexShrink: 0,
	marginBottom: 16,
	color: "rgb(130, 121, 157)",
	fontSize: 15,
	fontWeight: "500",
	lineHeight: 26,
	fontFamily: "Raleway",
	textAlign: "center",
	paddingHorizontal: 10,
	},
_Skip_Button: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	},
_Skip_Tour: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(130, 121, 157)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_Lifesavers___Online_1_container: {
	width: 333,
	height: 245,
	position: "absolute",
	left: 24,
	top: 160,
	},
_Lifesavers___Online_1: {
	width: "100%",
	height: "100%",
	flexShrink: 0,
	alignSelf: "flex-start",
	position: "relative",
	},
})

