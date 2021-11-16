import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform, StatusBar} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Screen_Shot_2021_10_17_at_5_21_2_link} from './assets/imageLinks.js'
const Page_Inbox  = ({navigation}) => {
	const [focus0, setFocus0] = useState(false);
	useEffect(() => {
	}, []);
	const onClick_layer_ec99ae = () => {
					navigation.navigate("Page_Home")
	}
	const onClick_layer_f93e4a = () => {
					navigation.navigate("Page_Community")
	}
	const onClick_layer_e44b40 = () => {
					navigation.navigate("Page_Journal")
	}
	return (
	// <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	// <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page16]}    >
			<View style = {noneModeStyles._Navbar_Simple}    >
				<View style = {noneModeStyles._Icon_Home}    >
					<View style = {noneModeStyles._layer_06a4e4}    >
					</View>
					<View style = {noneModeStyles._layer_ec99ae}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_ec99ae();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._layer_55bbd1}   >
							<Svg style={{height: 17, width: 19}} viewBox = "0 0 19 17">
								<Path fill = {"#A095C1"}     d = "M7.34694 15.9793V10.8757H11.4298V15.9793C11.4298 16.5406 11.8891 17 12.4505 17H15.5126C16.074 17 16.5334 16.5406 16.5334 15.9793V8.83427H18.2686C18.7381 8.83427 18.9626 8.25246 18.6054 7.94625L10.0722 0.260282C9.68437 -0.0867606 9.09236 -0.0867606 8.70449 0.260282L0.171329 7.94625C-0.175714 8.25246 0.0386359 8.83427 0.508164 8.83427H2.24338V15.9793C2.24338 16.5406 2.7027 17 3.26409 17H6.32623C6.88762 17 7.34694 16.5406 7.34694 15.9793Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Language}    >
					<View style = {noneModeStyles._layer_291c52}    >
					</View>
					<View style = {noneModeStyles._layer_f93e4a}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_f93e4a();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._layer_a546cb}   >
							<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
								<Path fill = {"#A095C1"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17.93C5.05 17.44 2 14.08 2 10C2 9.38 2.08 8.79 2.21 8.21L7 13V14C7 15.1 7.9 16 9 16V17.93ZM15.9 15.39C15.64 14.58 14.9 14 14 14H13V11C13 10.45 12.55 10 12 10H6V8H8C8.55 8 9 7.55 9 7V5H11C12.1 5 13 4.1 13 3V2.59C15.93 3.78 18 6.65 18 10C18 12.08 17.2 13.97 15.9 15.39Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Edit}    >
					<View style = {noneModeStyles._layer_1b1abb}    >
					</View>
					<View style = {noneModeStyles._layer_e44b40}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_e44b40();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._layer_beed8c}   >
							<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
								<Path fill = {"#A095C1"}     d = "M0 15.2638V18.4723C0 18.7678 0.23219 19 0.527704 19H3.73615C3.87335 19 4.01055 18.9472 4.10554 18.8417L15.6306 7.32718L11.6728 3.36939L0.158311 14.8839C0.0527705 14.9894 0 15.1161 0 15.2638ZM18.6913 4.26649C19.1029 3.85488 19.1029 3.18997 18.6913 2.77836L16.2216 0.308707C15.81 -0.102902 15.1451 -0.102902 14.7335 0.308707L12.8021 2.24011L16.7599 6.19789L18.6913 4.26649Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Person}    >
					<View style = {noneModeStyles._layer_2c11b0}    >
					</View>
					<View style = {noneModeStyles._layer_47d8a2}    >
						<View style = {noneModeStyles._layer_6f1b5e}   >
							<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
								<Path fill = {"#432C81"}     d = "M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Card_List}    >
				<View style = {noneModeStyles._Notification_Card}    >
					<View style = {noneModeStyles._Main_Container}    >
						<View style = {noneModeStyles._Title___Text}    >
							<Text style = {noneModeStyles._Notification_Title}   >
								Letter #1
							</Text>
							<Text style = {noneModeStyles._Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor}   >
								Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Notification_Card_2}    >
					<View style = {noneModeStyles._Main_Container_2}    >
						<View style = {noneModeStyles._Title___Text_2}    >
							<Text style = {noneModeStyles._Notification_Title_2}   >
								Letter #2
							</Text>
							<Text style = {noneModeStyles._Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_2}   >
								Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Notification_Card_3}    >
					<View style = {noneModeStyles._Main_Container_3}    >
						<View style = {noneModeStyles._Title___Text_3}    >
							<Text style = {noneModeStyles._Notification_Title_3}   >
								Letter #3
							</Text>
							<Text style = {noneModeStyles._Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_3}   >
								Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Notification_Card_4}    >
					<View style = {noneModeStyles._Main_Container_4}    >
						<View style = {noneModeStyles._Title___Text_4}    >
							<Text style = {noneModeStyles._Notification_Title_4}   >
								Letter #4
							</Text>
							<Text style = {noneModeStyles._Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_4}   >
								Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Floating_Action_Button}    >
				<View style = {noneModeStyles._Button_Background}    >
				</View>
				<View style = {noneModeStyles._Icon_Add}    >
					<View style = {noneModeStyles._layer_6f6d5e}    >
					</View>
					<View style = {noneModeStyles._layer_0e0f02}    >
						<View style = {noneModeStyles._layer_b02d4d}   >
							<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
								<Path fill = {"#432C81"}     d = "M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Nav_Bar}    >
				<View style = {noneModeStyles._Large_Header}    >
					<View style = {noneModeStyles._Screen_Shot_2021_10_17_at_5_21_2_container}    >
						<View style = {noneModeStyles._Screen_Shot_2021_10_17_at_5_21_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Screen_Shot_2021_10_17_at_5_21_2_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Title}   >
						Inbox
					</Text>
				</View>
				<View style = {noneModeStyles._Search_Bar}    >
					<View style = {[noneModeStyles._Right_Search_Field, {borderColor: focus0 ? "#7E58FF" : "",backgroundColor: focus0 ? "rgb(244, 244, 244)" : "rgb(244, 244, 244)"}]}    >
						<View style = {noneModeStyles._Search_Icon}    >
							<View style = {noneModeStyles._layer_119d00}    >
								<View style = {noneModeStyles._layer_95b4a0}   >
									<Svg style={{height: 15, width: 14}} viewBox = "0 0 14 15">
										<Path fill = {"#666666"}     d = "M5.50067 0C8.5386 0 11.0013 2.46284 11.0013 5.5009C11.0013 6.74943 10.5854 7.9008 9.88456 8.82402L13.7806 12.7247C14.0734 13.0178 14.0731 13.4928 13.78 13.7855C13.4869 14.0783 13.012 14.078 12.7192 13.7849L8.82364 9.88498C7.90046 10.5859 6.74914 11.0018 5.50067 11.0018C2.46273 11.0018 0 8.53897 0 5.5009C0 2.46284 2.46273 0 5.50067 0ZM5.50067 1.50017C3.29127 1.50017 1.50017 3.29134 1.50017 5.5009C1.50017 7.71046 3.29127 9.50164 5.50067 9.50164C7.71007 9.50164 9.50117 7.71046 9.50117 5.5009C9.50117 3.29134 7.71007 1.50017 5.50067 1.50017Z"/>
									</Svg>
								</View>
							</View>
						</View>
						<View style={noneModeStyles.___Search_Placeholder}>
							<TextInput style = {[{flex: 1, outline: "none",color: "rgba(126,88,255,100)",}]} placeholderTextColor = {"rgb(102, 102, 102)"}  placeholder = "Search" onFocus = {() => setFocus0(true)} onBlur = {() => setFocus0(false)} />
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Separator}    >
				</View>
			</View>
		</Animated.View>
	// </ScrollView>
	// </KeyboardAvoidingView>
)}
export default Page_Inbox

const noneModeStyles = StyleSheet.create({
_page16: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Navbar_Simple: {
	flexDirection: "row",
	justifyContent: "space-between",
	shadowOffset: {
		width: 0,
		height: -1
	},
	shadowColor: "rgba(0,0,0,0.08)",
	shadowRadius: 4,
	bottom: -(Dimensions.get('window').height+StatusBar.currentHeight)+(Dimensions.get('window').height/10),
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
_layer_06a4e4: {
	position: "absolute",
	},
_layer_ec99ae: {
	position: "absolute",
	transform: [
		{translateX: 2.80215},
		{translateY: 3.34497},
	],
	},
_layer_55bbd1: {
	},
_Icon_Language: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_291c52: {
	position: "absolute",
	},
_layer_f93e4a: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
_layer_a546cb: {
	},
_Icon_Edit: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_1b1abb: {
	position: "absolute",
	},
_layer_e44b40: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 2.99756},
	],
	},
_layer_beed8c: {
	},
_Icon_Person: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_2c11b0: {
	position: "absolute",
	},
_layer_47d8a2: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_6f1b5e: {
	},
_Card_List: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 16,
	top: 179,
	right: 16,
	},
_Notification_Card: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 16,
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
	marginBottom: 4,
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(123, 107, 168)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Notification_Card_2: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 16,
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
_Main_Container_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Title___Text_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Notification_Title_2: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	marginBottom: 4,
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_2: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(123, 107, 168)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Notification_Card_3: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 16,
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
_Main_Container_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Title___Text_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Notification_Title_3: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	marginBottom: 4,
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_3: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(123, 107, 168)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Notification_Card_4: {
	width: "100%",
	height: "auto",
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
_Main_Container_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Title___Text_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Notification_Title_4: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	marginBottom: 4,
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_4: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(123, 107, 168)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Floating_Action_Button: {
	width: 56,
	height: 56,
	position: "absolute",
	left: 308,
	top: 653,
	transform: [
		{translateX: 77},
		{translateY: 21},
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
		{translateX: 77},
		{translateY: 21},
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
_layer_6f6d5e: {
	position: "absolute",
	},
_layer_0e0f02: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
_layer_b02d4d: {
	},
_Nav_Bar: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 5.67188,
	bottom: 655.312,
	right: 0.5,
	paddingTop: 44,
	},
_Large_Header: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 16,
	paddingBottom: 8,
	paddingLeft: 16,
	},
_Screen_Shot_2021_10_17_at_5_21_2_container: {
	width: 34,
	height: 32,
	flexShrink: 0,
	position: "absolute",
	left: 319,
	top: 62,
	transform: [
		{translateX: -332.5002},
		{translateY: -663.3},
	],
	},
_Screen_Shot_2021_10_17_at_5_21_2: {
	width: "100%",
	height: "100%",
	transform: [
		{translateX: 36.5002},
		{translateY: -16.3},
	],
	},
_Title: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 34,
	fontWeight: "700",
	fontFamily: "SF Pro Display",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Search_Bar: {
	width: "100%",
	height: "auto",
	overflow: "hidden",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 12,
	paddingBottom: 8,
	paddingLeft: 12,
	},
_Right_Search_Field: {
	width: "auto",
	height: "100%",
	backgroundColor: "rgb(244, 244, 244)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	paddingTop: 6,
	paddingRight: 6,
	paddingBottom: 6,
	paddingLeft: 6,
	borderRadius: 10,
	},
_Search_Icon: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 6,
	},
_layer_119d00: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	},
_layer_95b4a0: {
	},
___Search_Placeholder: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(102, 102, 102)",
	fontSize: 17,
	fontWeight: "400",
	fontFamily: "SF Pro Display",
	textAlign: "left",
	},
_Separator: {
	width: "100%",
	height: 1,
	backgroundColor: "rgb(229, 229, 229)",
	overflow: "hidden",
	flexShrink: 0,
	},
})