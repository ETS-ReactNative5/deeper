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
import {image_Lifesavers___Sitting_1_link} from './assets/imageLinks.js'
const Page_Onboarding___2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Lifesavers___Sitting_1_container = () => {
					navigation.navigate("Page_Onboarding___3")
	}
	const onClick_Skip_Button = () => {
					navigation.navigate("Page_Home")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page7]}    >
			<View style = {noneModeStyles._Lifesavers___Sitting_1_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Lifesavers___Sitting_1_container();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Lifesavers___Sitting_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers___Sitting_1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Text}    >
				<View style = {noneModeStyles._Indicators}    >
					<View style = {noneModeStyles._Default}    >
					</View>
					<View style = {noneModeStyles._Active}    >
					</View>
					<View style = {noneModeStyles._Default_2}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Express_your_feelings}   >
					Express your feelings
				</Text>
				<Text style = {noneModeStyles._With_the_journal_tab__you_can_write_about_your_day_or_whatever_you_want_to_express_your_feelings__With_this__we_can_provide_you_with_your_mental_health_index_and_a_way_for_self_reflection_}   >
					With the journal tab, you can write about your day or whatever you want to express your feelings. With this, we can provide you with your  mental health index and a way for self-reflection.
				</Text>
				<View style = {noneModeStyles._Skip_Button}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Skip_Button();}} onStartShouldSetResponderCapture = {() => true}>
					<Text style = {noneModeStyles._Skip_Tour}   >
						Skip Tour
					</Text>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Onboarding___2

const noneModeStyles = StyleSheet.create({
_page7: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Lifesavers___Sitting_1_container: {
	width: 284,
	height: 310,
	position: "absolute",
	left: 46,
	top: 120,
	transform: [
		{translateX: 41},
	],
	},
_Lifesavers___Sitting_1: {
	width: "100%",
	height: "100%",
	transform: [
		{translateX: 24},
	],
	},
_Text: {
	width: "auto",
	height: 256,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 16,
	top: 476,
	right: 16,
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
_Default: {
	width: 6,
	height: 6,
	flexShrink: 0,
	marginRight: 6,
	},
_Active: {
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
_Express_your_feelings: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	marginBottom: 16,
	color: "rgb(67, 44, 129)",
	fontSize: 32,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "center",
	},
_With_the_journal_tab__you_can_write_about_your_day_or_whatever_you_want_to_express_your_feelings__With_this__we_can_provide_you_with_your_mental_health_index_and_a_way_for_self_reflection_: {
	width: "100%",
	height: 116,
	flexShrink: 0,
	marginBottom: 16,
	color: "rgb(130, 121, 157)",
	fontSize: 16,
	fontWeight: "500",
	lineHeight: 26,
	fontFamily: "Raleway",
	textAlign: "center",
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
})

