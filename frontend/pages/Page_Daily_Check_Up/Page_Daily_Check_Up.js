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
import {image_Lifesavers_Serum_Bag_link} from './assets/imageLinks.js'
import {image_Screen_Shot_2021_10_17_at_4_50_1_link} from './assets/imageLinks.js'
const Page_Daily_Check_Up  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_layer_ac8b9f = () => {
					navigation.navigate("Page_Home")
					navigation.navigate("Page_Home")
	}
	const onClick_Note_Card_3 = () => {
					navigation.navigate("Page_Journal")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page12]}    >
			<View style = {noneModeStyles._Home_Indicator}    >
				<View style = {noneModeStyles._Home_Indicator_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Icon_Back}    >
				<View style = {noneModeStyles._layer_ac8b9f}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_ac8b9f();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._layer_529096}   >
						<Svg style={{height: 12, width: 18}} viewBox = "0 0 18 12">
							<Path fill = {"#432C81"}     d = "M16.9762 4.69131H3.49353L6.44191 1.74292C6.84117 1.34366 6.84117 0.698705 6.44191 0.299445C6.04265 -0.099815 5.39769 -0.099815 4.99843 0.299445L0.299445 4.99843C-0.099815 5.39769 -0.099815 6.04265 0.299445 6.44191L4.99843 11.1409C5.39769 11.5402 6.04265 11.5402 6.44191 11.1409C6.84117 10.7416 6.84117 10.0967 6.44191 9.69742L3.49353 6.7388H16.9762C17.5393 6.7388 18 6.27811 18 5.71505C18 5.15199 17.5393 4.69131 16.9762 4.69131Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Horizontal_Card}    >
				<Text style = {noneModeStyles._Your_Diet_Chart}   >
					Daily Check-Up
				</Text>
				<View style = {noneModeStyles._Illustration}    >
					<View style = {noneModeStyles._Lifesavers_Serum_Bag_container}    >
						<View style = {noneModeStyles._Lifesavers_Serum_Bag}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers_Serum_Bag_link}}/>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Home_Indicator_3}    >
				<View style = {noneModeStyles._Home_Indicator_4}    >
				</View>
			</View>
			<View style = {noneModeStyles._Card_List}    >
				<View style = {noneModeStyles._Note_Card}    >
					<Text style = {noneModeStyles._Today}   >
						How are you feeling today?
					</Text>
					<View style = {noneModeStyles._Screen_Shot_2021_10_17_at_4_50_1_container}    >
						<View style = {noneModeStyles._Screen_Shot_2021_10_17_at_4_50_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Screen_Shot_2021_10_17_at_4_50_1_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Note_Card_2}    >
					<Text style = {noneModeStyles._Today_2}   >
						Take a survey
					</Text>
				</View>
				<View style = {noneModeStyles._Note_Card_3}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Note_Card_3();}} onStartShouldSetResponderCapture = {() => true}>
					<Text style = {noneModeStyles._Today_3}   >
						Write a journal entry
					</Text>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Daily_Check_Up

const noneModeStyles = StyleSheet.create({
_page12: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Home_Indicator: {
	width: 375,
	height: 34,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
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
_Icon_Back: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 16,
	top: 56,
	},
_layer_ac8b9f: {
	position: "absolute",
	transform: [
		{translateX: 3.41748},
		{translateY: 6.41748},
	],
	},
_layer_529096: {
	},
_Horizontal_Card: {
	width: 343,
	height: 112,
	backgroundColor: "rgb(237, 236, 244)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	position: "absolute",
	left: "50%",
	top: 106,
	transform: [
		{translateX: -170.5},
	],
	paddingRight: 16,
	paddingLeft: 16,
	borderRadius: 12,
	},
_Your_Diet_Chart: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 10,
	color: "rgb(67, 44, 129)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Illustration: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	paddingTop: 4,
	paddingRight: 4,
	paddingBottom: 4,
	paddingLeft: 4,
	},
_Lifesavers_Serum_Bag_container: {
	width: 144,
	height: 108,
	flexShrink: 0,
	},
_Lifesavers_Serum_Bag: {
	width: "100%",
	height: "100%",
	},
_Home_Indicator_3: {
	width: 375,
	height: 34,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	top: 778,
	},
_Home_Indicator_4: {
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
_Card_List: {
	width: "auto",
	height: 900,
	backgroundColor: "rgb(237, 236, 244)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 244,
	right: 0,
	transform: [
		{translateY: 1.25},
	],
	paddingTop: 16,
	paddingRight: 16,
	paddingBottom: 16,
	paddingLeft: 16,
	borderRadius: 16,
	},
_Note_Card: {
	width: "100%",
	height: 150,
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 10,
	paddingTop: 24,
	paddingRight: 16,
	paddingBottom: 24,
	paddingLeft: 16,
	borderRadius: 12,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.16)",
	shadowRadius: 8,
	},
_Today: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	marginBottom: 8,
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Screen_Shot_2021_10_17_at_4_50_1_container: {
	width: 394,
	height: 101,
	flexShrink: 0,
	},
_Screen_Shot_2021_10_17_at_4_50_1: {
	width: Dimensions.get('window').width/1.2,
	height: Dimensions.get('window').height/10,
	top: 0,
	},
_Note_Card_2: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 10,
	paddingTop: 24,
	paddingRight: 16,
	paddingBottom: 24,
	paddingLeft: 16,
	borderRadius: 12,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.16)",
	shadowRadius: 8,
	},
_Today_2: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Note_Card_3: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	paddingTop: 24,
	paddingRight: 16,
	paddingBottom: 24,
	paddingLeft: 16,
	borderRadius: 12,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.16)",
	shadowRadius: 8,
	},
_Today_3: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
})

