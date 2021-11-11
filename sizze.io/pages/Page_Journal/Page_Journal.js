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
import {image_Screen_Shot_2021_10_17_at_5_21_1_link} from './assets/imageLinks.js'
const Page_Journal  = ({navigation}) => {
	const [focus0, setFocus0] = useState(false);
	useEffect(() => {
	}, []);
	const onClick_layer_78c218 = () => {
					navigation.navigate("Page_Home")
	}
	const onClick_layer_5cbf92 = () => {
					navigation.navigate("Page_Community")
	}
	const onClick_layer_7fc057 = () => {
					navigation.navigate("Page_Inbox")
	}
	return (
	// <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	// <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page17]}    >
			<View style = {noneModeStyles._Home_Indicator}    >
				<View style = {noneModeStyles._Home_Indicator_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Navbar_Simple_2}    >
				<View style = {noneModeStyles._Icon_Home}    >
					<View style = {noneModeStyles._layer_4246d3}    >
					</View>
					<View style = {noneModeStyles._layer_78c218}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_78c218();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._layer_5180b6}   >
							<Svg style={{height: 17, width: 19}} viewBox = "0 0 19 17">
								<Path fill = {"#A095C1"}     d = "M7.34694 15.9793V10.8757H11.4298V15.9793C11.4298 16.5406 11.8891 17 12.4505 17H15.5126C16.074 17 16.5334 16.5406 16.5334 15.9793V8.83427H18.2686C18.7381 8.83427 18.9626 8.25246 18.6054 7.94625L10.0722 0.260282C9.68437 -0.0867606 9.09236 -0.0867606 8.70449 0.260282L0.171329 7.94625C-0.175714 8.25246 0.0386359 8.83427 0.508164 8.83427H2.24338V15.9793C2.24338 16.5406 2.7027 17 3.26409 17H6.32623C6.88762 17 7.34694 16.5406 7.34694 15.9793Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Language}    >
					<View style = {noneModeStyles._layer_6fcd2a}    >
					</View>
					<View style = {noneModeStyles._layer_5cbf92}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_5cbf92();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._layer_128e17}   >
							<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
								<Path fill = {"#A095C1"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17.93C5.05 17.44 2 14.08 2 10C2 9.38 2.08 8.79 2.21 8.21L7 13V14C7 15.1 7.9 16 9 16V17.93ZM15.9 15.39C15.64 14.58 14.9 14 14 14H13V11C13 10.45 12.55 10 12 10H6V8H8C8.55 8 9 7.55 9 7V5H11C12.1 5 13 4.1 13 3V2.59C15.93 3.78 18 6.65 18 10C18 12.08 17.2 13.97 15.9 15.39Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Edit}    >
					<View style = {noneModeStyles._layer_23114b}    >
					</View>
					<View style = {noneModeStyles._layer_caf0ae}    >
						<View style = {noneModeStyles._layer_da49a8}   >
							<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
								<Path fill = {"#432C81"}     d = "M0 15.2638V18.4723C0 18.7678 0.23219 19 0.527704 19H3.73615C3.87335 19 4.01055 18.9472 4.10554 18.8417L15.6306 7.32718L11.6728 3.36939L0.158311 14.8839C0.0527705 14.9894 0 15.1161 0 15.2638ZM18.6913 4.26649C19.1029 3.85488 19.1029 3.18997 18.6913 2.77836L16.2216 0.308707C15.81 -0.102902 15.1451 -0.102902 14.7335 0.308707L12.8021 2.24011L16.7599 6.19789L18.6913 4.26649Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Person}    >
					<View style = {noneModeStyles._layer_5dbdf0}    >
					</View>
					<View style = {noneModeStyles._layer_7fc057}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_7fc057();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._layer_a1bfba}   >
							<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
								<Path fill = {"#A095C1"}     d = "M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Journal}   >
				Journal
			</Text>
			<View style = {[noneModeStyles._Card_List, {borderColor: focus0 ? "#7E58FF" : "",backgroundColor: focus0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}]}    >



				<View style = {noneModeStyles._Notification_Card}    >
					<View style = {[noneModeStyles._Main_Container, {borderColor: focus0 ? "#7E58FF" : "",backgroundColor: focus0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}]}    >
						<View style = {noneModeStyles._Title___Text}    >
							<View style={noneModeStyles._Notification_Title}>
								<TextInput style = {[{flex: 1, outline: "none",color: "rgba(67,44,129,100)",}]} placeholderTextColor = {"rgb(67, 44, 129)"}  placeholder = "Start writing here..." onFocus = {() => setFocus0(true)} onBlur = {() => setFocus0(false)} />
							</View>
						</View>
					</View>
				</View>



			</View>
			<View style = {noneModeStyles._Screen_Shot_2021_10_17_at_5_21_1_container}    >
				<View style = {noneModeStyles._Screen_Shot_2021_10_17_at_5_21_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Screen_Shot_2021_10_17_at_5_21_1_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Floating_Action_Button}    >
				<View style = {noneModeStyles._Button_Background}    >
				</View>
				<View style = {noneModeStyles._Icon_Add}    >
					<View style = {noneModeStyles._layer_2c2b96}    >
					</View>
					<View style = {noneModeStyles._layer_0b55b9}    >
						<View style = {noneModeStyles._layer_c2a693}   >
							<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
								<Path fill = {"#432C81"}     d = "M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
		</Animated.View>
	// </ScrollView>
	// </KeyboardAvoidingView>
)}
export default Page_Journal

const noneModeStyles = StyleSheet.create({
_page17: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Home_Indicator_2: {
	width: 134,
	height: 5,
	backgroundColor: "rgb(0, 0, 0)",
	position: "absolute",
	left: "50%",
	bottom: 8,
	transform: [
		{translateX: -66.5},
	],
	borderRadius: 100,
	},
_Icon_Home_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_09e994: {
	position: "absolute",
	},
_layer_502857: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
_layer_c15eec: {
	},
_layer_cdfe30: {
	position: "absolute",
	},
_layer_6ad754: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
_layer_b058c8: {
	},
_layer_11183e: {
	position: "absolute",
	},
_layer_ba0ea5: {
	position: "absolute",
	transform: [
		{translateX: 4.41353},
		{translateY: 2.5},
	],
	},
_layer_8735d6: {
	},
_layer_03d745: {
	position: "absolute",
	},
_layer_31f474: {
	position: "absolute",
	transform: [
		{translateX: 2.27066},
		{translateY: 2},
	],
	},
_layer_951995: {
	},
_Navbar_Simple_2: {
	flexDirection: "row",
	justifyContent: "space-between",
	shadowOffset: {
		width: 0,
		height: -1
	},
	shadowColor: "rgba(0,0,0,0.08)",
	shadowRadius: 4,
	bottom: -Dimensions.get('window').height+(Dimensions.get('window').height/9),
	paddingTop: 16,
	paddingRight: 32,
	paddingBottom: 16,
	paddingLeft: 32,
	},
_Icon_Home: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_4246d3: {
	position: "absolute",
	},
_layer_78c218: {
	position: "absolute",
	transform: [
		{translateX: 2.80215},
		{translateY: 3.34497},
	],
	},
_layer_5180b6: {
	},
_Icon_Language: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_6fcd2a: {
	position: "absolute",
	},
_layer_5cbf92: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
_layer_128e17: {
	},
_Icon_Edit: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_23114b: {
	position: "absolute",
	},
_layer_caf0ae: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 2.99756},
	],
	},
_layer_da49a8: {
	},
_Icon_Person: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_5dbdf0: {
	position: "absolute",
	},
_layer_7fc057: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_a1bfba: {
	},
_Journal: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 16,
	top: 65,
	right: 16,
	color: "rgb(67, 44, 129)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Card_List: {
	width: Dimensions.get("window").width-36,
	height: Dimensions.get("window").height/2,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 16,
	top: 124,
	right: 16,
	},
_Notification_Card: {
	width: "100%",
	height: Dimensions.get('window').height/1.45,
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	paddingTop: 16,
	paddingRight: 16,
	paddingBottom: 16,
	paddingLeft: 16,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 236, 244)",
	borderRadius: 8,
	},
_Main_Container: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Title___Text: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Notification_Title: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Screen_Shot_2021_10_17_at_5_21_1_container: {
	width: 34,
	height: 32,
	position: "absolute",
	left: 316,
	top: 65,
	},
_Screen_Shot_2021_10_17_at_5_21_1: {
	width: "100%",
	height: "100%",
	transform: [
		{translateX: 93},
	],
	},
_Floating_Action_Button: {
	width: 56,
	height: 56,
	position: "absolute",
	left: 308,
	top: 653,
	transform: [
		{translateX: 78},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.16)",
	shadowRadius: 8,
	},
_Button_Background: {
	width: 56,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 78},
	],
	},
_Icon_Add: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 16},
	],
	},
_layer_2c2b96: {
	position: "absolute",
	},
_layer_0b55b9: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
_layer_c2a693: {
	},
})

