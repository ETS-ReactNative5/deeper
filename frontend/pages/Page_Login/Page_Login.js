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
import {image_Lifesavers___Bust_2_link} from './assets/imageLinks.js'

const Page_Login  = ({navigation}) => {
	const [focus0, setFocus0] = useState(false);
	const [focus1, setFocus1] = useState(false);
	useEffect(() => {
	}, []);
	const onClick_Login_Button = () => {
					navigation.navigate("Page_Onboarding___1")
	}
	const onClick_Sign_Up = () => {
					navigation.navigate("Page_Sign_Up")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page4]}    >
			<View style = {noneModeStyles._Title_Lines}    >
				<Text style = {noneModeStyles._Login}   >
					Sign In
				</Text>
			</View>
			<View style = {noneModeStyles._Login_Data}    >
				<View style = {noneModeStyles._Lifesavers___Bust_2_container}    >
					<View style = {noneModeStyles._Lifesavers___Bust_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers___Bust_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Login_Form}    >
					<View style = {noneModeStyles._Email_Text_Box}    >
					</View>
					<View style = {noneModeStyles._Password_Wrapper}    >
						<View style = {[noneModeStyles._Password_Text_Box, {borderColor: focus0 ? "rgb(237, 236, 244)" : "rgb(237, 236, 244)",backgroundColor: focus0 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)"}]}    >
							<View style = {[noneModeStyles._Placeholder___Right_Icon, {borderColor: focus0 ? "#7E58FF" : "",backgroundColor: focus0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}]}    >
								<View style={noneModeStyles._label}>
									<TextInput style = {[{flex: 1, outline: "none",color: "rgba(123,107,168,100)",}]} placeholderTextColor = {"rgb(123, 107, 168)"}  placeholder = "Password" onFocus = {() => setFocus0(true)} onBlur = {() => setFocus0(false)} />
								</View>
								<View style = {noneModeStyles._Icon_Eye}    >
									<View style = {noneModeStyles._layer_63280e}    >
									</View>
									<View style = {noneModeStyles._layer_46c1a0}    >
										<View style = {noneModeStyles._layer_15fc65}   >
											<Svg style={{height: 15, width: 22}} viewBox = "0 0 22 15">
												<Path fill = {"#A095C1"}     d = "M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"/>
											</Svg>
										</View>
									</View>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles._Forgot_Password_link}   >
							Forgot Password?
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Login_Button}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Login_Button();}} onStartShouldSetResponderCapture = {() => true}>
					<Text style = {noneModeStyles._label_2}   >
						Sign In
					</Text>
				</View>
				<View style = {noneModeStyles._Bottom_Link}    >
					<Text style = {noneModeStyles._Don_t_have_an_account_}   >
						Don’t have an account?
					</Text>
					<Text style = {noneModeStyles._Sign_Up} onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Sign_Up();}}>
						Sign Up
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Title_Lines_2}    >
				<Text style = {noneModeStyles._Login_2}   >
					Sign In
				</Text>
			</View>
			<View style = {[noneModeStyles._Password_Text_Box_2, {borderColor: focus1 ? "rgb(237, 236, 244)" : "rgb(237, 236, 244)",backgroundColor: focus1 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)"}]}    >
				<View style = {[noneModeStyles._Placeholder___Right_Icon_2, {borderColor: focus1 ? "#7E58FF" : "",backgroundColor: focus1 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}]}    >
					<View style={noneModeStyles._label_3}>
						<TextInput style = {[{flex: 1, outline: "none",color: "rgba(123,107,168,100)",}]} placeholderTextColor = {"rgb(123, 107, 168)"}  placeholder = "Email" onFocus = {() => setFocus1(true)} onBlur = {() => setFocus1(false)} />
					</View>
					<View style = {noneModeStyles._Icon_Eye_2}    >
						<View style = {noneModeStyles._layer_63280e_2}    >
						</View>
					</View>
				</View>
			</View>
		</Animated.View>
	</KeyboardAvoidingView>
)}
export default Page_Login

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Title_Lines: {
	display: "flex",
	//flexDirection: "",
	},
_Login: {
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	},
_Login_Data: {
	width: "auto",
	height: 535,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 0,
	top: 187,
	right: 0,
	transform: [
		{translateY: 31.25},
	],
	paddingRight: 24,
	paddingLeft: 24,
	},
_Lifesavers___Bust_2_container: {
	width: 176,
	height: 263,
	flexShrink: 0,
	marginBottom: 24,
	},
_Lifesavers___Bust_2: {
	width: "100%",
	height: "100%",
	transform: [
		{translateY: -57.8125},
	],
	},
_Login_Form: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 24,
	},
_Email_Text_Box: {
	display: "flex",
	//flexDirection: "",
	flexShrink: 0,
	marginBottom: 16,
	},
_Password_Wrapper: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	justifyContent: "flex-end",
	flexShrink: 0,
	},
_Password_Text_Box: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 8,
	paddingTop: 10,
	paddingRight: 20,
	paddingBottom: 10,
	paddingLeft: 20,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 236, 244)",
	borderRadius: 8,
	},
_Placeholder___Right_Icon: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_label: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 24,
	color: "rgb(123, 107, 168)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Icon_Eye: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_63280e: {
	position: "absolute",
	},
_layer_46c1a0: {
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 4},
	],
	},
_layer_15fc65: {
	},
_Forgot_Password_link: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "right",
	},
_Login_Button: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(67, 44, 129)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginBottom: 24,
	paddingTop: 12,
	paddingRight: 24,
	paddingBottom: 12,
	paddingLeft: 24,
	borderRadius: 8,
	},
_label_2: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_Bottom_Link: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	},
_Don_t_have_an_account_: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 8,
	color: "rgb(130, 121, 157)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Sign_Up: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Title_Lines_2: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 0,
	top: 87,
	right: 0,
	paddingRight: 24,
	paddingLeft: 24,
	},
_Login_2: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 32,
	fontWeight: "700",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_Password_Text_Box_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	paddingTop: 10,
	paddingRight: 20,
	paddingBottom: 10,
	paddingLeft: 20,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 236, 244)",
	borderRadius: 8,
	},
_Placeholder___Right_Icon_2: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_label_3: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 24,
	color: "rgb(123, 107, 168)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Icon_Eye_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_63280e_2: {
	position: "absolute",
	},
})

