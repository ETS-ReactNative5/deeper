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
import {image_Untitled_drawing__3__1_link} from './assets/imageLinks.js'
const Page_Splash  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Sign_Up_Button = () => {
					navigation.navigate("Page_Sign_Up")
	}
	const onClick_Login_Button = () => {
					navigation.navigate("Page_Login_1")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page1]}    >
			<View style = {noneModeStyles._Bottom_Buttons}    >
				<View style = {noneModeStyles._Sign_Up_Button}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Sign_Up_Button();}} onStartShouldSetResponderCapture = {() => true}>
					<Text style = {noneModeStyles._label}   >
						Sign Up
					</Text>
				</View>
				<View style = {noneModeStyles._Login_Button}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Login_Button();}} onStartShouldSetResponderCapture = {() => true}>
					<Text style = {noneModeStyles._label_2}   >
						Sign In
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Title_Lines}    >
				<Text style = {noneModeStyles._Welcome_Back}   >
					
				</Text>
				<Text style = {noneModeStyles._Login}   >
					
				</Text>
			</View>
			<View style = {noneModeStyles._Untitled_drawing__3__1_container}    >
				<View style = {noneModeStyles._Untitled_drawing__3__1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Untitled_drawing__3__1_link}}/>
				</View>
			</View>
		</Animated.View>
	</KeyboardAvoidingView>
)}
export default Page_Splash

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Bottom_Buttons: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 1,
	top: 412,
	right: -1,
	transform: [
		{translateX: -1},
	],
	paddingRight: 24,
	paddingLeft: 24,
	},
_Sign_Up_Button: {
	width: Dimensions.get('window').width/1.2,
	height: Dimensions.get('window').height/14,
	backgroundColor: "rgb(67, 44, 129)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginBottom: 16,
	paddingTop: 12,
	paddingRight: 24,
	paddingBottom: 12,
	paddingLeft: 24,
	borderRadius: 8,
	},
_label: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Raleway",
	textAlign: "center",
	},
_Login_Button: {
	width: Dimensions.get('window').width/1.2,
	height: Dimensions.get('window').height/14,
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 12,
	paddingRight: 24,
	paddingBottom: 12,
	paddingLeft: 24,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(67, 44, 129)",
	borderRadius: 8,
	},
_label_2: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_Title_Lines: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 0,
	top: 74,
	right: 0,
	paddingRight: 24,
	paddingLeft: 24,
	},
_Welcome_Back: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	marginBottom: 4,
	color: "rgb(67, 44, 129)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "center",
	},
_Login: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 32,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "center",
	},
_Untitled_drawing__3__1_container: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "flex-start",
	position: "absolute",
	left: -112.5,
	top: 164.391,
	bottom: 457.203,
	right: -112.5,
	},
_Untitled_drawing__3__1: {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height/4,
	},
})

