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
import {image_Lifesavers___Videocall_1_link} from './assets/imageLinks.js'
const Page_Onboarding___3  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Skip_Tour = () => {
					navigation.navigate("Page_Home")
	}
	const onClick_Lifesavers___Videocall_1_container = () => {
					navigation.navigate("Page_Home")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page8]}    >
			<View style = {noneModeStyles._Text}    >
				<View style = {noneModeStyles._Indicators}    >
					<View style = {noneModeStyles._Default}    >
					</View>
					<View style = {noneModeStyles._Default_2}    >
					</View>
					<View style = {noneModeStyles._Active}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Message_and_connect}   >
					Message and connect
				</Text>
				<Text style = {noneModeStyles._With_the_inbox_tab__you_can_draw_or_write_letters_of_reassurance_to_your_loved_ones__as_well_as_see_how_they_re_doing_with_their_statuses_and_journal_entries_if_they_choose_to_share_any_of_them_}   >
					With the inbox tab, you can draw or write letters of reassurance to your loved ones, as well as see how they’re doing with their statuses and journal entries if they choose to share any of them.
				</Text>
				<View style = {noneModeStyles._Skip_Button}    >
					<Text style = {noneModeStyles._Skip_Tour} onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Skip_Tour();}}>
						Skip Tour
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Lifesavers___Videocall_1_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Lifesavers___Videocall_1_container();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Lifesavers___Videocall_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers___Videocall_1_link}}/>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Onboarding___3

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Text: {
	width: "auto",
	height: "auto",
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
_Default_2: {
	width: 6,
	height: 6,
	flexShrink: 0,
	marginRight: 6,
	},
_Active: {
	width: 6,
	height: 6,
	flexShrink: 0,
	},
_Message_and_connect: {
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
_With_the_inbox_tab__you_can_draw_or_write_letters_of_reassurance_to_your_loved_ones__as_well_as_see_how_they_re_doing_with_their_statuses_and_journal_entries_if_they_choose_to_share_any_of_them_: {
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
_Lifesavers___Videocall_1_container: {
	width: 372,
	height: 322,
	position: "absolute",
	left: 4,
	top: 114,
	},
_Lifesavers___Videocall_1: {
	width: "100%",
	height: "100%",
	transform: [
		{translateX: 39},
	],
	},
})

