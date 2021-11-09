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
import {image_Lifesavers_Avatar_link} from './assets/imageLinks.js'
import {image_Lifesavers_Serum_Bag_link} from './assets/imageLinks.js'
import {image_Lifesavers_Electrocardiogram_link} from './assets/imageLinks.js'
import {image_Lifesavers_Bust_link} from './assets/imageLinks.js'
import {image_Lifesavers_Stethoscope_link} from './assets/imageLinks.js'

const Page_Home  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Horizontal_Card = () => {
					navigation.navigate("Page_Daily_Check_Up")
	}
	const onClick_Horizontal_Card_2 = () => {
					navigation.navigate("Page_Health_Index")
	}
	const onClick_layer_71be10 = () => {
					navigation.navigate("Page_Community")
	}
	const onClick_layer_e8138f = () => {
					navigation.navigate("Page_Journal")
	}
	const onClick_layer_075a66 = () => {
					navigation.navigate("Page_Inbox")
	}
	return (
	//<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	//<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page9]}    >
			<View style = {noneModeStyles._Home_Container}    >
				<View style = {noneModeStyles._Title___User_Profile}    >
					<Text style = {noneModeStyles._Hi__Kristin_}   >
						Hi, Kristin!
					</Text>
					<View style = {noneModeStyles._Profile_Image}    >
						<View style = {noneModeStyles._Lifesavers_Avatar_container}    >
							<View style = {noneModeStyles._Lifesavers_Avatar}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers_Avatar_link}}/>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Horizontal_Card}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Horizontal_Card();}} onStartShouldSetResponderCapture = {() => true}>
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
				<View style = {noneModeStyles._Horizontal_Card_2}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Horizontal_Card_2();}} onStartShouldSetResponderCapture = {() => true}>
					<Text style = {noneModeStyles._Your_Diet_Chart_2}   >
						Health Index
					</Text>
					<View style = {noneModeStyles._Illustration_2}    >
						<View style = {noneModeStyles._Lifesavers_Electrocardiogram_container}    >
							<View style = {noneModeStyles._Lifesavers_Electrocardiogram}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers_Electrocardiogram_link}}/>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Horizontal_Card_3}    >
					<Text style = {noneModeStyles._Your_Diet_Chart_3}   >
						Mediation
					</Text>
					<View style = {noneModeStyles._Illustration_3}    >
						<View style = {noneModeStyles._Lifesavers_Bust_container}    >
							<View style = {noneModeStyles._Lifesavers_Bust}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers_Bust_link}}/>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Horizontal_Card_4}    >
					<Text style = {noneModeStyles._Your_Diet_Chart_4}   >
						Resources
					</Text>
					<View style = {noneModeStyles._Illustration_4}    >
						<View style = {noneModeStyles._Lifesavers_Stethoscope_container}    >
							<View style = {noneModeStyles._Lifesavers_Stethoscope}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers_Stethoscope_link}}/>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Navbar_Simple}    >
				<View style = {noneModeStyles._Icon_Home}    >
					<View style = {noneModeStyles._layer_4589a8}    >
					</View>
					<View style = {noneModeStyles._layer_e4cf74}    >
						<View style = {noneModeStyles._layer_8d7ebd}   >
							<Svg style={{height: 17, width: 19}} viewBox = "0 0 19 17">
								<Path fill = {"#432C81"}     d = "M7.34694 15.9793V10.8757H11.4298V15.9793C11.4298 16.5406 11.8891 17 12.4505 17H15.5126C16.074 17 16.5334 16.5406 16.5334 15.9793V8.83427H18.2686C18.7381 8.83427 18.9626 8.25246 18.6054 7.94625L10.0722 0.260282C9.68437 -0.0867606 9.09236 -0.0867606 8.70449 0.260282L0.171329 7.94625C-0.175714 8.25246 0.0386359 8.83427 0.508164 8.83427H2.24338V15.9793C2.24338 16.5406 2.7027 17 3.26409 17H6.32623C6.88762 17 7.34694 16.5406 7.34694 15.9793Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Language}    >
					<View style = {noneModeStyles._layer_bd3182}    >
					</View>
					<View style = {noneModeStyles._layer_71be10}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_71be10();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._layer_ba7e8f}   >
							<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
								<Path fill = {"#A095C1"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17.93C5.05 17.44 2 14.08 2 10C2 9.38 2.08 8.79 2.21 8.21L7 13V14C7 15.1 7.9 16 9 16V17.93ZM15.9 15.39C15.64 14.58 14.9 14 14 14H13V11C13 10.45 12.55 10 12 10H6V8H8C8.55 8 9 7.55 9 7V5H11C12.1 5 13 4.1 13 3V2.59C15.93 3.78 18 6.65 18 10C18 12.08 17.2 13.97 15.9 15.39Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Edit}    >
					<View style = {noneModeStyles._layer_c7d2fe}    >
					</View>
					<View style = {noneModeStyles._layer_e8138f}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_e8138f();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._layer_784cd5}   >
							<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
								<Path fill = {"#A095C1"}     d = "M0 15.2639V18.4724C0 18.7679 0.232191 19.0001 0.527706 19.0001H3.73616C3.87336 19.0001 4.01057 18.9473 4.10555 18.8418L15.6307 7.3272L11.6729 3.3694L0.158312 14.884C0.0527707 14.9895 0 15.1161 0 15.2639ZM18.6914 4.2665C19.103 3.85489 19.103 3.18998 18.6914 2.77837L16.2217 0.308708C15.8101 -0.102903 15.1452 -0.102903 14.7336 0.308708L12.8022 2.24011L16.7599 6.19791L18.6914 4.2665Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Person}    >
					<View style = {noneModeStyles._layer_545a8c}    >
					</View>
					<View style = {noneModeStyles._layer_075a66}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_075a66();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._layer_3252ba}   >
							<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
								<Path fill = {"#A095C1"}     d = "M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
		</Animated.View>
	//</ScrollView>
	//</KeyboardAvoidingView>
)}
export default Page_Home

const noneModeStyles = StyleSheet.create({
_page9: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Home_Container: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 68,
	right: 0,
	transform: [
		{translateY: -31.5},
	],
	paddingRight: 16,
	paddingLeft: 16,
	},
_Title___User_Profile: {
	width: "100%",
	height: Dimensions.get('window').height/13,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	marginBottom: 16,
	},
_Hi__Kristin_: {
	width: "100%",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 16,
	color: "rgb(67, 44, 129)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Profile_Image: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(237, 236, 244)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	paddingTop: 8,
	paddingRight: 8,
	paddingBottom: 8,
	paddingLeft: 8,
	borderRadius: 100,
	},
_Lifesavers_Avatar_container: {
	width: 30,
	height: 30,
	flexShrink: 0,
	},
_Lifesavers_Avatar: {
	width: "100%",
	height: "100%",
	},
_Horizontal_Card: {
	width: "100%",
	height: Dimensions.get('window').height/6.5,
	backgroundColor: "rgb(237, 236, 244)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	marginBottom: 16,
	paddingRight: 16,
	paddingLeft: 16,
	borderRadius: 12,

	/* flexDirection: "row",
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
	paddingLeft: 32, */


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
_Horizontal_Card_2: {
	width: "100%",
	height: Dimensions.get('window').height/6.5,
	backgroundColor: "rgb(237, 236, 244)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	marginBottom: 16,
	paddingRight: 16,
	paddingLeft: 16,
	borderRadius: 12,
	},
_Your_Diet_Chart_2: {
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
_Illustration_2: {
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
	},
_Horizontal_Card_3: {
	width: "100%",
	height: Dimensions.get('window').height/6.5,
	backgroundColor: "rgb(237, 236, 244)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	marginBottom: 16,
	paddingRight: 16,
	paddingLeft: 16,
	borderRadius: 12,
	},
_Your_Diet_Chart_3: {
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
_Illustration_3: {
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
_Lifesavers_Bust_container: {
	width: 144,
	height: 108,
	flexShrink: 0,
	},
_Lifesavers_Bust: {
	width: "100%",
	height: "100%",
	},
_Horizontal_Card_4: {
	justifyContent: "flex-start",
	width: "100%",
	height: Dimensions.get('window').height/6.5,
	backgroundColor: "rgb(237, 236, 244)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	paddingRight: 16,
	paddingLeft: 16,
	borderRadius: 12,
	},
_Your_Diet_Chart_4: {
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
_Illustration_4: {
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
_Lifesavers_Stethoscope_container: {
	width: 144,
	height: 108,
	flexShrink: 0,
	},
_Lifesavers_Stethoscope: {
	width: "100%",
	height: "100%",
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
_layer_4589a8: {
	position: "absolute",
	},
_layer_e4cf74: {
	position: "absolute",
	transform: [
		{translateX: 2.80212},
		{translateY: 3.34497},
	],
	},
_layer_8d7ebd: {
	},
_Icon_Language: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_bd3182: {
	position: "absolute",
	},
_layer_71be10: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
_layer_ba7e8f: {
	},
_Icon_Edit: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_c7d2fe: {
	position: "absolute",
	},
_layer_e8138f: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 2.99756},
	],
	},
_layer_784cd5: {
	},
_Icon_Person: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_545a8c: {
	position: "absolute",
	},
_layer_075a66: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_3252ba: {
	},
})

