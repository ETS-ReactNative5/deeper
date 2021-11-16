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
import {image_Lifesavers_Electrocardiogram_link} from './assets/imageLinks.js'
import {image_image_1_link} from './assets/imageLinks.js'
const Page_Health_Index  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_layer_983fae = () => {
					navigation.navigate("Page_Home")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page13]}    >
			<View style = {noneModeStyles._Home_Indicator}    >
				<View style = {noneModeStyles._Home_Indicator_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Icon_Back}    >
				<View style = {noneModeStyles._layer_983fae}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_983fae();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._layer_74ce4b}   >
						<Svg style={{height: 12, width: 18}} viewBox = "0 0 18 12">
							<Path fill = {"#432C81"}     d = "M16.9762 4.69131H3.49353L6.44191 1.74292C6.84117 1.34366 6.84117 0.698705 6.44191 0.299445C6.04265 -0.099815 5.39769 -0.099815 4.99843 0.299445L0.299445 4.99843C-0.099815 5.39769 -0.099815 6.04265 0.299445 6.44191L4.99843 11.1409C5.39769 11.5402 6.04265 11.5402 6.44191 11.1409C6.84117 10.7416 6.84117 10.0967 6.44191 9.69742L3.49353 6.7388H16.9762C17.5393 6.7388 18 6.27811 18 5.71505C18 5.15199 17.5393 4.69131 16.9762 4.69131Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Horizontal_Card}    >
				<Text style = {noneModeStyles._Your_Diet_Chart}   >
					Health Index
				</Text>
				<View style = {noneModeStyles._Illustration}    >
					<View style = {noneModeStyles._Lifesavers_Electrocardiogram_container}    >
						<View style = {noneModeStyles._Lifesavers_Electrocardiogram}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers_Electrocardiogram_link}}/>
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
						Daily
					</Text>
					<View style = {noneModeStyles._image_1_container}    >
						<View style = {noneModeStyles._image_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_1_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Note_Card_2}    >
					<Text style = {noneModeStyles._Today_2}   >
						Weekly
					</Text>
				</View>
				<View style = {noneModeStyles._Note_Card_3}    >
					<Text style = {noneModeStyles._Today_3}   >
						Monthly
					</Text>
				</View>
				<View style = {noneModeStyles._Note_Card_4}    >
					<Text style = {noneModeStyles._Today_4}   >
						Yearly
					</Text>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Health_Index

const noneModeStyles = StyleSheet.create({
_page13: {
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
_layer_983fae: {
	position: "absolute",
	transform: [
		{translateX: 3.41748},
		{translateY: 6.41748},
	],
	},
_layer_74ce4b: {
	},
_Horizontal_Card: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(237, 236, 244)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	position: "absolute",
	left: 16,
	top: 104,
	right: 16,
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
_Lifesavers_Electrocardiogram_container: {
	width: 144,
	height: 108,
	flexShrink: 0,
	},
_Lifesavers_Electrocardiogram: {
	width: "100%",
	height: "100%",
	transform: [
		{translateX: 8},
	],
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
	paddingTop: 16,
	paddingRight: 16,
	paddingBottom: 16,
	paddingLeft: 16,
	borderRadius: 16,
	},
_Note_Card: {
	width: "100%",
	height: 283,
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
_image_1_container: {
	width: 390,
	height: 200,
	flexShrink: 0,
	},
_image_1: {
	width: "100%",
	height: "100%",
	top: 0,
	right: 106,
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
_Note_Card_4: {
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
_Today_4: {
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

