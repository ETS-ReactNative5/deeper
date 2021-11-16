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
import {image_image_4_link} from './assets/imageLinks.js'
const Page_Friend_List  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_layer_07cbda = () => {
					navigation.navigate("Page_Inbox")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page10]}    >
			<View style = {noneModeStyles._Icon_Back}    >
				<View style = {noneModeStyles._layer_07cbda}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_layer_07cbda();}} onStartShouldSetResponderCapture = {() => true}>
					<View style = {noneModeStyles._layer_83c31e}   >
						<Svg style={{height: 12, width: 18}} viewBox = "0 0 18 12">
							<Path fill = {"#432C81"}     d = "M16.9762 4.69131H3.49353L6.44191 1.74292C6.84117 1.34366 6.84117 0.698705 6.44191 0.299445C6.04265 -0.099815 5.39769 -0.099815 4.99843 0.299445L0.299445 4.99843C-0.099815 5.39769 -0.099815 6.04265 0.299445 6.44191L4.99843 11.1409C5.39769 11.5402 6.04265 11.5402 6.44191 11.1409C6.84117 10.7416 6.84117 10.0967 6.44191 9.69742L3.49353 6.7388H16.9762C17.5393 6.7388 18 6.27811 18 5.71505C18 5.15199 17.5393 4.69131 16.9762 4.69131Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Card_List}    >
				<Text style = {noneModeStyles._Friend_List}   >
					Friend List
				</Text>
				<View style = {noneModeStyles._Notification_Card}    >
					<View style = {noneModeStyles._Main_Container}    >
						<View style = {noneModeStyles._Left_Circle}    >
							<View style = {noneModeStyles._Round}    >
							</View>
						</View>
						<View style = {noneModeStyles._Title___Text}    >
							<Text style = {noneModeStyles._Notification_Title}   >
								Friend #1
							</Text>
							<Text style = {noneModeStyles._Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor}   >
								Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Notification_Card_2}    >
					<View style = {noneModeStyles._Main_Container_2}    >
						<View style = {noneModeStyles._Left_Circle_2}    >
							<View style = {noneModeStyles._Round_2}    >
							</View>
						</View>
						<View style = {noneModeStyles._Title___Text_2}    >
							<Text style = {noneModeStyles._Notification_Title_2}   >
								Friend #2
							</Text>
							<Text style = {noneModeStyles._Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_2}   >
								Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Notification_Card_3}    >
					<View style = {noneModeStyles._Main_Container_3}    >
						<View style = {noneModeStyles._Left_Circle_3}    >
							<View style = {noneModeStyles._Round_3}    >
							</View>
						</View>
						<View style = {noneModeStyles._Title___Text_3}    >
							<Text style = {noneModeStyles._Notification_Title_3}   >
								Friend #3
							</Text>
							<Text style = {noneModeStyles._Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_3}   >
								Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Notification_Card_4}    >
					<View style = {noneModeStyles._Main_Container_4}    >
						<View style = {noneModeStyles._Left_Circle_4}    >
							<View style = {noneModeStyles._Round_4}    >
							</View>
						</View>
						<View style = {noneModeStyles._Title___Text_4}    >
							<Text style = {noneModeStyles._Notification_Title_4}   >
								Friend #4
							</Text>
							<Text style = {noneModeStyles._Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_4}   >
								Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Notification_Card_5}    >
					<View style = {noneModeStyles._Main_Container_5}    >
						<View style = {noneModeStyles._Left_Circle_5}    >
							<View style = {noneModeStyles._Round_5}    >
							</View>
						</View>
						<View style = {noneModeStyles._Title___Text_5}    >
							<Text style = {noneModeStyles._Notification_Title_5}   >
								Friend #5
							</Text>
							<Text style = {noneModeStyles._Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_5}   >
								Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._image_4_container}    >
				<View style = {noneModeStyles._image_4}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_4_link}}/>
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Friend_List

const noneModeStyles = StyleSheet.create({
_page10: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
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
_layer_07cbda: {
	position: "absolute",
	transform: [
		{translateX: 3.41748},
		{translateY: 6.41748},
	],
	},
_layer_83c31e: {
	},
_Card_List: {
	width: "auto",
	height: 686,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 16,
	top: 92,
	right: 16,
	},
_Friend_List: {
	width: 343,
	height: "auto",
	flexShrink: 0,
	marginBottom: 16,
	color: "rgb(67, 44, 129)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "left",
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
_Left_Circle: {
	width: "auto",
	height: 72,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginRight: 16,
	paddingTop: 8,
	},
_Round: {
	width: 10,
	height: 10,
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
	fontFamily: "Inter",
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
_Left_Circle_2: {
	width: "auto",
	height: 72,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginRight: 16,
	paddingTop: 8,
	},
_Round_2: {
	width: 10,
	height: 10,
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
	fontFamily: "Inter",
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
_Left_Circle_3: {
	width: "auto",
	height: 72,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginRight: 16,
	paddingTop: 8,
	},
_Round_3: {
	width: 10,
	height: 10,
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
	fontFamily: "Inter",
	textAlign: "left",
	},
_Notification_Card_4: {
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
_Left_Circle_4: {
	width: "auto",
	height: 72,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginRight: 16,
	paddingTop: 8,
	},
_Round_4: {
	width: 10,
	height: 10,
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
	fontFamily: "Inter",
	textAlign: "left",
	},
_Notification_Card_5: {
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
_Main_Container_5: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Left_Circle_5: {
	width: "auto",
	height: 72,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginRight: 16,
	paddingTop: 8,
	},
_Round_5: {
	width: 10,
	height: 10,
	flexShrink: 0,
	},
_Title___Text_5: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	},
_Notification_Title_5: {
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
_Lorem_ipsum_dolor_sit_amet__consectetur_Lorem_ipsum_dolor_sit_amet__ipsum_dolor_5: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(123, 107, 168)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Inter",
	textAlign: "left",
	},
_image_4_container: {
	width: 48,
	height: 37,
	position: "absolute",
	left: 317,
	top: 87,
	},
_image_4: {
	width: "100%",
	height: "100%",
	transform: [
		{translateX: 77},
	],
	},
})

