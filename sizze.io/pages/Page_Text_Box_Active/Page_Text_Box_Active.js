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
const Page_Text_Box_Active  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._Login_Data}    >
				<View style = {noneModeStyles._Lifesavers___Bust_2_container}    >
					<View style = {noneModeStyles._Lifesavers___Bust_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers___Bust_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Login_Form}    >
					<View style = {noneModeStyles._Email_Text_Box}    >
						<View style = {noneModeStyles._Placeholder___Right_Icon}    >
							<Text style = {noneModeStyles._label}   >
								youareawsome@mail.com
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Password_Wrapper}    >
						<View style = {noneModeStyles._Password_Text_Box}    >
							<View style = {noneModeStyles._Placeholder___Right_Icon_2}    >
								<Text style = {noneModeStyles._label_2}   >
									Password
								</Text>
								<View style = {noneModeStyles._Icon_Eye}    >
									<View style = {noneModeStyles._layer_485a3d}    >
									</View>
									<View style = {noneModeStyles._layer_fc6170}    >
										<View style = {noneModeStyles._layer_a36773}   >
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
				<View style = {noneModeStyles._Login_Button}    >
					<Text style = {noneModeStyles._label_3}   >
						Sign In
					</Text>
				</View>
				<View style = {noneModeStyles._Bottom_Link}    >
					<Text style = {noneModeStyles._Don_t_have_an_account_}   >
						Don’t have an account?
					</Text>
					<Text style = {noneModeStyles._Sign_Up}   >
						Sign Up
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Home_Indicator}    >
				<View style = {noneModeStyles._Home_Indicator_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._IPhone_X__or_newer_}    >
				<View style = {noneModeStyles._Notch}    >
				</View>
				<View style = {noneModeStyles._Right_Side}    >
					<View style = {noneModeStyles._Battery}    >
						<View style = {noneModeStyles._layer_174a97}    >
							<View style = {noneModeStyles._layer_c9f5fe}   >
								<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.5 2.66666C0.5 1.47005 1.47005 0.5 2.66667 0.5H19.3333C20.53 0.5 21.5 1.47005 21.5 2.66667V8.66667C21.5 9.86329 20.53 10.8333 19.3333 10.8333H2.66667C1.47005 10.8333 0.5 9.86328 0.5 8.66667V2.66666Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_f87091}    >
							<View style = {noneModeStyles._layer_8b5ae8}   >
								<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
									<Path fill = {"black"}     d = "M0 0V4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_9f6126}    >
							<View style = {noneModeStyles._layer_983bfa}   >
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
						<View style = {noneModeStyles._layer_6efe7d}    >
							<View style = {noneModeStyles._layer_d54865}   >
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
			<View style = {noneModeStyles._Keyboard}    >
				<View style = {noneModeStyles._Home_Indicator_3}    >
					<View style = {noneModeStyles._Home_Indicator_4}    >
					</View>
				</View>
				<View style = {noneModeStyles._Keys}    >
					<View style = {noneModeStyles._Dictation}    >
					</View>
					<View style = {noneModeStyles._Emoji}    >
					</View>
					<View style = {noneModeStyles._Return}    >
						<View style = {noneModeStyles._layer_e9e38d}    >
							<View style = {noneModeStyles._layer_fb9b27}   >
								<Svg style={{height: 43, width: 88}} viewBox = "0 0 88 43">
								</Svg>
							</View>
						</View>
						<Text style = {noneModeStyles._Label}   >
							Go
						</Text>
					</View>
					<View style = {noneModeStyles._Space}    >
						<View style = {noneModeStyles._layer_68c96f}    >
							<View style = {noneModeStyles._layer_8f93dc}   >
								<Svg style={{height: 43, width: 182}} viewBox = "0 0 182 43">
								</Svg>
							</View>
						</View>
						<Text style = {noneModeStyles._Label_2}   >
							space
						</Text>
					</View>
					<View style = {noneModeStyles._123}    >
						<View style = {noneModeStyles._layer_25fd33}    >
							<View style = {noneModeStyles._layer_a325a2}   >
								<Svg style={{height: 43, width: 87}} viewBox = "0 0 87 43">
								</Svg>
							</View>
						</View>
						<Text style = {noneModeStyles._Label_3}   >
							123
						</Text>
					</View>
					<View style = {noneModeStyles._Delete}    >
						<View style = {noneModeStyles._Key_Light}    >
							<View style = {noneModeStyles._layer_8d7fb9}    >
								<View style = {noneModeStyles._layer_5f963d}   >
									<Svg style={{height: 43, width: 42}} viewBox = "0 0 42 43">
									</Svg>
								</View>
							</View>
							<Text style = {noneModeStyles._Label_4}   >
								 
							</Text>
						</View>
						<View style = {noneModeStyles._Delete_Button}    >
						</View>
					</View>
					<View style = {noneModeStyles._Shift}    >
						<View style = {noneModeStyles._Key_Light_2}    >
							<View style = {noneModeStyles._Rectangle}    >
							</View>
							<Text style = {noneModeStyles._Symbol}   >
								 
							</Text>
						</View>
						<View style = {noneModeStyles._layer_e717a1}    >
							<View style = {noneModeStyles._layer_044dc0}   >
								<Svg style={{height: 17, width: 19}} viewBox = "0 0 19 17">
									<Path fill = {"black"}     d = "M18.2553 10.5308H14.0316V14.5251C14.0316 14.6056 14.0316 14.6794 14.0316 14.7565C14.0316 14.8236 14.0316 14.8873 14.0289 14.9544C14.0271 15.0982 14.0146 15.2417 13.9917 15.3837C13.9667 15.5247 13.9216 15.6614 13.8575 15.7895C13.792 15.9174 13.7064 16.0341 13.604 16.1349C13.5011 16.2358 13.3836 16.3206 13.2555 16.3865C13.1258 16.4496 12.988 16.4948 12.846 16.5206C12.7037 16.5429 12.5599 16.5553 12.4158 16.5575C12.3487 16.5575 12.2836 16.5609 12.2179 16.5609H6.78446C6.71739 16.5609 6.65266 16.5575 6.58659 16.5575C6.44248 16.5553 6.2987 16.5429 6.1563 16.5206C6.01444 16.4947 5.87678 16.4496 5.74715 16.3865C5.61904 16.3206 5.50158 16.2358 5.39869 16.1349C5.29621 16.0341 5.21061 15.9175 5.14515 15.7895C5.08113 15.6614 5.03595 15.5247 5.01099 15.3837C4.98792 15.2417 4.97537 15.0982 4.97343 14.9544C4.97343 14.8873 4.97075 14.8236 4.97075 14.7565C4.97075 14.6794 4.97075 14.6056 4.97075 14.5251V10.5308H0.680286C0.24631 10.5308 -0.310414 9.5951 0.21076 9.07527C0.653791 8.63593 7.61687 1.69365 9.07407 0.248178C9.18115 0.116585 9.3324 0.0283855 9.49967 0H9.51107C9.65577 0.00784755 9.79013 0.0774702 9.87998 0.191164C11.3372 1.63663 18.3241 8.63593 18.7674 9.07527C19.289 9.5951 18.8523 10.5308 18.2553 10.5308Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._M}    >
						<View style = {noneModeStyles._Rectangle_2}    >
						</View>
						<Text style = {noneModeStyles._Symbol_2}   >
							M
						</Text>
					</View>
					<View style = {noneModeStyles._N}    >
						<View style = {noneModeStyles._Rectangle_3}    >
						</View>
						<Text style = {noneModeStyles._Symbol_3}   >
							N
						</Text>
					</View>
					<View style = {noneModeStyles._B}    >
						<View style = {noneModeStyles._Rectangle_4}    >
						</View>
						<Text style = {noneModeStyles._Symbol_4}   >
							B
						</Text>
					</View>
					<View style = {noneModeStyles._V}    >
						<View style = {noneModeStyles._Rectangle_5}    >
						</View>
						<Text style = {noneModeStyles._Symbol_5}   >
							V
						</Text>
					</View>
					<View style = {noneModeStyles._C}    >
						<View style = {noneModeStyles._Rectangle_6}    >
						</View>
						<Text style = {noneModeStyles._Symbol_6}   >
							C
						</Text>
					</View>
					<View style = {noneModeStyles._X}    >
						<View style = {noneModeStyles._Rectangle_7}    >
						</View>
						<Text style = {noneModeStyles._Symbol_7}   >
							X
						</Text>
					</View>
					<View style = {noneModeStyles._Z}    >
						<View style = {noneModeStyles._Rectangle_8}    >
						</View>
						<Text style = {noneModeStyles._Symbol_8}   >
							Z
						</Text>
					</View>
					<View style = {noneModeStyles._L}    >
						<View style = {noneModeStyles._Rectangle_9}    >
						</View>
						<Text style = {noneModeStyles._Symbol_9}   >
							L
						</Text>
					</View>
					<View style = {noneModeStyles._K}    >
						<View style = {noneModeStyles._Rectangle_10}    >
						</View>
						<Text style = {noneModeStyles._Symbol_10}   >
							K
						</Text>
					</View>
					<View style = {noneModeStyles._J}    >
						<View style = {noneModeStyles._Rectangle_11}    >
						</View>
						<Text style = {noneModeStyles._Symbol_11}   >
							J
						</Text>
					</View>
					<View style = {noneModeStyles._H}    >
						<View style = {noneModeStyles._Rectangle_12}    >
						</View>
						<Text style = {noneModeStyles._Symbol_12}   >
							H
						</Text>
					</View>
					<View style = {noneModeStyles._G}    >
						<View style = {noneModeStyles._Rectangle_13}    >
						</View>
						<Text style = {noneModeStyles._Symbol_13}   >
							G
						</Text>
					</View>
					<View style = {noneModeStyles._F}    >
						<View style = {noneModeStyles._Rectangle_14}    >
						</View>
						<Text style = {noneModeStyles._Symbol_14}   >
							F
						</Text>
					</View>
					<View style = {noneModeStyles._D}    >
						<View style = {noneModeStyles._Rectangle_15}    >
						</View>
						<Text style = {noneModeStyles._Symbol_15}   >
							D
						</Text>
					</View>
					<View style = {noneModeStyles._S}    >
						<View style = {noneModeStyles._Rectangle_16}    >
						</View>
						<Text style = {noneModeStyles._Symbol_16}   >
							S
						</Text>
					</View>
					<View style = {noneModeStyles._A}    >
						<View style = {noneModeStyles._Rectangle_17}    >
						</View>
						<Text style = {noneModeStyles._Symbol_17}   >
							A
						</Text>
					</View>
					<View style = {noneModeStyles._P}    >
						<View style = {noneModeStyles._Rectangle_18}    >
						</View>
						<Text style = {noneModeStyles._Symbol_18}   >
							P
						</Text>
					</View>
					<View style = {noneModeStyles._O}    >
						<View style = {noneModeStyles._Rectangle_19}    >
						</View>
						<Text style = {noneModeStyles._Symbol_19}   >
							O
						</Text>
					</View>
					<View style = {noneModeStyles._I}    >
						<View style = {noneModeStyles._Rectangle_20}    >
						</View>
						<Text style = {noneModeStyles._Symbol_20}   >
							I
						</Text>
					</View>
					<View style = {noneModeStyles._U}    >
						<View style = {noneModeStyles._Rectangle_21}    >
						</View>
						<Text style = {noneModeStyles._Symbol_21}   >
							U
						</Text>
					</View>
					<View style = {noneModeStyles._Y}    >
						<View style = {noneModeStyles._Rectangle_22}    >
						</View>
						<Text style = {noneModeStyles._Symbol_22}   >
							Y
						</Text>
					</View>
					<View style = {noneModeStyles._T}    >
						<View style = {noneModeStyles._Rectangle_23}    >
						</View>
						<Text style = {noneModeStyles._Symbol_23}   >
							T
						</Text>
					</View>
					<View style = {noneModeStyles._R}    >
						<View style = {noneModeStyles._Rectangle_24}    >
						</View>
						<Text style = {noneModeStyles._Symbol_24}   >
							R
						</Text>
					</View>
					<View style = {noneModeStyles._E}    >
						<View style = {noneModeStyles._Rectangle_25}    >
						</View>
						<Text style = {noneModeStyles._Symbol_25}   >
							E
						</Text>
					</View>
					<View style = {noneModeStyles._W}    >
						<View style = {noneModeStyles._Rectangle_26}    >
						</View>
						<Text style = {noneModeStyles._Symbol_26}   >
							W
						</Text>
					</View>
					<View style = {noneModeStyles._Q}    >
						<View style = {noneModeStyles._Rectangle_27}    >
						</View>
						<Text style = {noneModeStyles._Symbol_27}   >
							Q
						</Text>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Title_Bar}    >
				<View style = {noneModeStyles._Icon_Back}    >
					<View style = {noneModeStyles._layer_220fcd}    >
						<View style = {noneModeStyles._layer_2cd5df}   >
							<Svg style={{height: 12, width: 18}} viewBox = "0 0 18 12">
								<Path fill = {"#432C81"}     d = "M16.9763 4.69132H3.49353L6.44192 1.74293C6.84118 1.34367 6.84118 0.698707 6.44192 0.299446C6.04266 -0.0998152 5.3977 -0.0998152 4.99844 0.299446L0.299446 4.99844C-0.0998152 5.3977 -0.0998152 6.04266 0.299446 6.44192L4.99844 11.1409C5.3977 11.5402 6.04266 11.5402 6.44192 11.1409C6.84118 10.7417 6.84118 10.0967 6.44192 9.69743L3.49353 6.73881H16.9763C17.5393 6.73881 18 6.27812 18 5.71506C18 5.152 17.5393 4.69132 16.9763 4.69132Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Login}   >
					Sign In
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Text_Box_Active

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Login_Data: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 0,
	top: -85,
	right: 0,
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
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 16,
	paddingTop: 10,
	paddingRight: 20,
	paddingBottom: 10,
	paddingLeft: 20,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(67, 44, 129)",
	borderRadius: 8,
	},
_Placeholder___Right_Icon: {
	width: 287,
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
	color: "rgb(67, 44, 129)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
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
_Placeholder___Right_Icon_2: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_label_2: {
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
	textAlign: "left",
	},
_Icon_Eye: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_485a3d: {
	position: "absolute",
	},
_layer_fc6170: {
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 4},
	],
	},
_layer_a36773: {
	},
_Forgot_Password_link: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
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
_label_3: {
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
	width: 24.328,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateX: 42.3333},
		{translateY: 9.33325},
	],
	},
_layer_174a97: {
	width: 22,
	height: 11.3333,
	position: "absolute",
	top: 0,
	right: 2.32803,
	},
_layer_c9f5fe: {
	},
_layer_f87091: {
	width: 1.32803,
	height: 4,
	position: "absolute",
	top: 3.66669,
	right: 0,
	},
_layer_8b5ae8: {
	},
_layer_9f6126: {
	width: 18,
	height: 7.33331,
	position: "absolute",
	top: 2,
	right: 4.32803,
	},
_layer_983bfa: {
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
_layer_6efe7d: {
	width: 28.4262,
	height: 11.0889,
	position: "absolute",
	left: 12.4535,
	top: 5.16748,
	},
_layer_d54865: {
	},
_Keyboard: {
	width: "auto",
	height: 291,
	backgroundColor: "rgb(209, 213, 219)",
	position: "absolute",
	left: 0,
	top: 521,
	right: 0,
	},
_Home_Indicator_3: {
	width: "auto",
	height: 34,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 1,
	bottom: 0,
	right: -1,
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
_Keys: {
	width: 369,
	height: 259,
	position: "absolute",
	left: "50%",
	top: 8,
	transform: [
		{translateX: -184.5},
	],
	},
_Dictation: {
	width: 15,
	height: 25,
	position: "absolute",
	transform: [
		{translateX: 327},
		{translateY: 233},
	],
	},
_Emoji: {
	width: 27,
	height: 27,
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 232},
	],
	},
_Return: {
	width: 88,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 281},
		{translateY: 162},
	],
	},
_layer_e9e38d: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	},
_layer_fb9b27: {
	},
_Label: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	right: 0,
	transform: [
		{translateY: 11},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Space: {
	width: 182,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 93},
		{translateY: 162},
	],
	},
_layer_68c96f: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	},
_layer_8f93dc: {
	},
_Label_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	right: 0,
	transform: [
		{translateY: 11},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_123: {
	width: 87,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateY: 162},
	],
	},
_layer_25fd33: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	},
_layer_a325a2: {
	},
_Label_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	right: 0,
	transform: [
		{translateY: 11},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Delete: {
	width: 42,
	height: 42,
	position: "absolute",
	transform: [
		{translateX: 327},
		{translateY: 108},
	],
	},
_Key_Light: {
	width: 42,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	},
_layer_8d7fb9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	},
_layer_5f963d: {
	},
_Label_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	right: 0,
	transform: [
		{translateY: 11},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 16,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Delete_Button: {
	width: 22.66,
	height: 16.9942,
	position: "absolute",
	transform: [
		{translateX: 9.66},
		{translateY: 12.66},
	],
	},
_Shift: {
	width: 42,
	height: 42,
	position: "absolute",
	transform: [
		{translateY: 108},
	],
	},
_Key_Light_2: {
	width: 42,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	},
_Rectangle: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 20.1875},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_layer_e717a1: {
	position: "absolute",
	transform: [
		{translateX: 11.66},
		{translateY: 12.2},
	],
	},
_layer_044dc0: {
	},
_M: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 282},
		{translateY: 108},
	],
	},
_Rectangle_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 6},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_N: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 244},
		{translateY: 108},
	],
	},
_Rectangle_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_B: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 206},
		{translateY: 108},
	],
	},
_Rectangle_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_V: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 169},
		{translateY: 108},
	],
	},
_Rectangle_5: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_C: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 131},
		{translateY: 108},
	],
	},
_Rectangle_6: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_X: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 94},
		{translateY: 108},
	],
	},
_Rectangle_7: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Z: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 108},
	],
	},
_Rectangle_8: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_L: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 319},
		{translateY: 54},
	],
	},
_Rectangle_9: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 10},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_K: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 281},
		{translateY: 54},
	],
	},
_Rectangle_10: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_J: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 244},
		{translateY: 54},
	],
	},
_Rectangle_11: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 10},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_H: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 206},
		{translateY: 54},
	],
	},
_Rectangle_12: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_12: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_G: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 169},
		{translateY: 54},
	],
	},
_Rectangle_13: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_13: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_F: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 131},
		{translateY: 54},
	],
	},
_Rectangle_14: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_14: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 10},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_D: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 94},
		{translateY: 54},
	],
	},
_Rectangle_15: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_15: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_S: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 54},
	],
	},
_Rectangle_16: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_16: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_A: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 19},
		{translateY: 54},
	],
	},
_Rectangle_17: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_17: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_P: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 337},
	],
	},
_Rectangle_18: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_18: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_O: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 300},
	],
	},
_Rectangle_19: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_19: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_I: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 262},
	],
	},
_Rectangle_20: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_20: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 13},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_U: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 225},
	],
	},
_Rectangle_21: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_21: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 8},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Y: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 187},
	],
	},
_Rectangle_22: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_22: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_T: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 150},
	],
	},
_Rectangle_23: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_23: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_R: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 112},
	],
	},
_Rectangle_24: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_24: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_E: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 75},
	],
	},
_Rectangle_25: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_25: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 9},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_W: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	transform: [
		{translateX: 37},
	],
	},
_Rectangle_26: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_26: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 5},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Q: {
	width: 32,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	},
_Rectangle_27: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	bottom: 0,
	right: 0,
	borderRadius: 4.6,
	shadowOffset: {
		width: 0,
		height: 1
	},
	shadowColor: "rgba(137,138,141,1)",
	shadowRadius: 0,
	},
_Symbol_27: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7},
		{translateY: -13},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 22.5,
	fontWeight: "400",
	fontFamily: "SF Pro Text",
	textAlign: "center",
	},
_Title_Bar: {
	width: 375,
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	position: "absolute",
	top: 44,
	paddingTop: 10,
	paddingRight: 16,
	paddingBottom: 10,
	paddingLeft: 16,
	},
_Icon_Back: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 24,
	},
_layer_220fcd: {
	position: "absolute",
	transform: [
		{translateX: 3.41751},
		{translateY: 6.41748},
	],
	},
_layer_2cd5df: {
	},
_Login: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "left",
	},
})

