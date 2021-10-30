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
const Page_No_Connection_Error__1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Lifesavers___Bust_2_container = () => {
					navigation.navigate("Page_Splash")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page0]}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._IPhone_X__or_newer_}    >
					<View style = {noneModeStyles._Notch}    >
					</View>
					<View style = {noneModeStyles._Right_Side}    >
						<View style = {noneModeStyles._Battery}    >
							<View style = {noneModeStyles._layer_9bc384}    >
								<View style = {noneModeStyles._layer_5ff31a}   >
									<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
										<Path fill = {"none"}   stroke = {"black"}  d = "M0.5 2.66666C0.5 1.47005 1.47005 0.5 2.66667 0.5H19.3333C20.53 0.5 21.5 1.47005 21.5 2.66667V8.66667C21.5 9.86329 20.53 10.8333 19.3333 10.8333H2.66667C1.47005 10.8333 0.5 9.86328 0.5 8.66667V2.66666Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_629ba3}    >
								<View style = {noneModeStyles._layer_d80947}   >
									<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
										<Path fill = {"black"}     d = "M0 0V4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_3a1e35}    >
								<View style = {noneModeStyles._layer_a436ef}   >
									<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
										<Path fill = {"black"}     d = "M0 1.33333C0 0.596955 0.596954 0 1.33333 0H16.6667C17.403 0 18 0.596954 18 1.33333V6C18 6.73638 17.403 7.33333 16.6667 7.33333H1.33333C0.596954 7.33333 0 6.73638 0 6V1.33333Z"/>
									</Svg>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Wifi}    >
						</View>
						<View style = {noneModeStyles._Mobile_Signal}    >
						</View>
					</View>
					<View style = {noneModeStyles._Left_Side}    >
						<View style = {noneModeStyles._Time}    >
							<View style = {noneModeStyles._layer_0131eb}    >
								<View style = {noneModeStyles._layer_6d3d77}   >
									<Svg style={{height: 12, width: 29}} viewBox = "0 0 29 12">
										<Path fill = {"black"}     d = "M3.94525 11.3127C6.6875 11.3127 8.31641 9.16823 8.31641 5.5368C8.31641 4.16941 8.05489 3.01872 7.55426 2.12954C6.82947 0.747207 5.58164 0 4.00503 0C1.6588 0 0 1.57661 0 3.78834C0 5.86557 1.49441 7.37493 3.54923 7.37493C4.81201 7.37493 5.83569 6.78464 6.34379 5.76096H6.3662C6.3662 5.76096 6.39609 5.76096 6.40356 5.76096C6.41851 5.76096 6.47081 5.76096 6.47081 5.76096C6.47081 8.22675 5.5368 9.69874 3.9602 9.69874C3.03366 9.69874 2.31634 9.19064 2.06976 8.37619H0.149441C0.47074 10.1471 1.97263 11.3127 3.94525 11.3127ZM4.0125 5.84316C2.77214 5.84316 1.89043 4.96145 1.89043 3.72856C1.89043 2.52556 2.81697 1.60649 4.01997 1.60649C5.22298 1.60649 6.14951 2.5405 6.14951 3.75845C6.14951 4.96145 5.24539 5.84316 4.0125 5.84316Z"/>
										<Path fill = {"black"}     d = "M11.4699 11.2081C12.1798 11.2081 12.6655 10.7 12.6655 10.0275C12.6655 9.34756 12.1798 8.84693 11.4699 8.84693C10.7675 8.84693 10.2744 9.34756 10.2744 10.0275C10.2744 10.7 10.7675 11.2081 11.4699 11.2081ZM11.4699 5.60405C12.1798 5.60405 12.6655 5.10342 12.6655 4.43094C12.6655 3.75098 12.1798 3.25035 11.4699 3.25035C10.7675 3.25035 10.2744 3.75098 10.2744 4.43094C10.2744 5.10342 10.7675 5.60405 11.4699 5.60405Z"/>
										<Path fill = {"black"}     d = "M19.6596 11.0512H21.5052V9.0412H22.9623V7.41229H21.5052V0.268994H18.7854C16.88 3.13827 15.3632 5.5368 14.3918 7.32263V9.0412H19.6596V11.0512ZM16.1776 7.34504C17.4329 5.13331 18.5537 3.36243 19.5849 1.83813H19.6895V7.45712H16.1776V7.34504Z"/>
										<Path fill = {"black"}     d = "M27.0722 11.0512H29V0.268994H27.0797L24.2627 2.24162V4.09469L26.9452 2.21173H27.0722V11.0512Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Home_Indicator}    >
					<View style = {noneModeStyles._Home_Indicator_2}    >
					</View>
				</View>
				<View style = {noneModeStyles._Text___Illustration}    >
					<View style = {noneModeStyles._Illustration}    >
						<View style = {noneModeStyles._Lifesavers___Bust_2_container}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Lifesavers___Bust_2_container();}} onStartShouldSetResponderCapture = {() => true}>
							<View style = {noneModeStyles._Lifesavers___Bust_2}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers___Bust_2_link}}/>
							</View>
						</View>
					</View>
					<View style={noneModeStyles._Opps__No_Internet_Connection}>
						<TextInput style = {[{flex: 1, outlineColor: "#7E58FF",}]} placeholderTextColor = {"rgb(67, 44, 129)"}  placeholder = "Oops! No Internet Connection" />
					</View>
					<Text style = {noneModeStyles._Tap_the_screen_to_try_again}   >
						Tap the screen to try again
					</Text>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_No_Connection_Error__1

const noneModeStyles = StyleSheet.create({
_page0: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_viewport: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_IPhone_X__or_newer_: {
	width: 375,
	height: 44,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	top: 0,
	},
_Notch: {
	width: 375,
	height: 46,
	position: "absolute",
	left: 0,
	top: -2,
	},
_Right_Side: {
	width: 66.6614,
	height: 20.6666,
	position: "absolute",
	left: 293.667,
	top: 8.00012,
	},
_Battery: {
	width: 24.3281,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateX: 42.3334},
		{translateY: 9.33325},
	],
	},
_layer_9bc384: {
	width: 22,
	height: 11.3333,
	position: "absolute",
	top: 0,
	right: 2.32806,
	},
_layer_5ff31a: {
	},
_layer_629ba3: {
	width: 1.32806,
	height: 4,
	position: "absolute",
	top: 3.66669,
	right: 0,
	},
_layer_d80947: {
	},
_layer_3a1e35: {
	width: 18,
	height: 7.33331,
	position: "absolute",
	top: 2,
	right: 4.32806,
	},
_layer_a436ef: {
	},
_Wifi: {
	width: 15.2724,
	height: 10.9656,
	position: "absolute",
	transform: [
		{translateX: 22.0271},
		{translateY: 9.33057},
	],
	},
_Mobile_Signal: {
	width: 17,
	height: 10.6667,
	position: "absolute",
	transform: [
		{translateY: 9.6665},
	],
	},
_Left_Side: {
	width: 54,
	height: 21,
	position: "absolute",
	left: 21,
	top: 12,
	},
_Time: {
	width: 54,
	height: 21,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 32,
	},
_layer_0131eb: {
	width: 28.4262,
	height: 11.0889,
	position: "absolute",
	left: 12.4535,
	top: 5.16748,
	},
_layer_6d3d77: {
	},
_Home_Indicator: {
	width: 375,
	height: 34,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	top: 778,
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
_Text___Illustration: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 22,
	top: 202,
	right: 22,
	},
_Illustration: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginBottom: 6,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	},
_Lifesavers___Bust_2_container: {
	width: 176,
	height: 263,
	flexShrink: 0,
	},
_Lifesavers___Bust_2: {
	width: "100%",
	height: "100%",
	},
_Opps__No_Internet_Connection: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	marginBottom: 6,
	color: "rgb(67, 44, 129)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_Tap_the_screen_to_try_again: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(160, 149, 193)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "right",
	},
})

