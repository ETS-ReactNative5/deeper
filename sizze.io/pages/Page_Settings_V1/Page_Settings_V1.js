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
const Page_Settings_V1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page14}    >
			<View style = {noneModeStyles._IPhone_X__or_newer_}    >
				<View style = {noneModeStyles._Notch}    >
				</View>
				<View style = {noneModeStyles._Right_Side}    >
					<View style = {noneModeStyles._Battery}    >
						<View style = {noneModeStyles._layer_708c03}    >
							<View style = {noneModeStyles._layer_659cf4}   >
								<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.5 2.66666C0.5 1.47005 1.47005 0.5 2.66667 0.5H19.3333C20.53 0.5 21.5 1.47005 21.5 2.66667V8.66667C21.5 9.86329 20.53 10.8333 19.3333 10.8333H2.66667C1.47005 10.8333 0.5 9.86328 0.5 8.66667V2.66666Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_2886a1}    >
							<View style = {noneModeStyles._layer_be2d9b}   >
								<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
									<Path fill = {"black"}     d = "M0 0V4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_35b81d}    >
							<View style = {noneModeStyles._layer_c1791a}   >
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
						<View style = {noneModeStyles._layer_d792b5}    >
							<View style = {noneModeStyles._layer_c8ab90}   >
								<Svg style={{height: 12, width: 29}} viewBox = "0 0 29 12">
									<Path fill = {"black"}     d = "M3.94526 11.3127C6.68751 11.3127 8.31642 9.16824 8.31642 5.53681C8.31642 4.16942 8.0549 3.01872 7.55427 2.12954C6.82948 0.747208 5.58164 0 4.00503 0C1.6588 0 0 1.57661 0 3.78834C0 5.86558 1.49442 7.37494 3.54924 7.37494C4.81202 7.37494 5.83569 6.78465 6.34379 5.76097H6.36621C6.36621 5.76097 6.3961 5.76097 6.40357 5.76097C6.41851 5.76097 6.47082 5.76097 6.47082 5.76097C6.47082 8.22676 5.53681 9.69876 3.9602 9.69876C3.03366 9.69876 2.31634 9.19065 2.06977 8.3762H0.149442C0.470741 10.1471 1.97263 11.3127 3.94526 11.3127ZM4.0125 5.84316C2.77214 5.84316 1.89044 4.96146 1.89044 3.72857C1.89044 2.52556 2.81697 1.6065 4.01998 1.6065C5.22298 1.6065 6.14952 2.54051 6.14952 3.75845C6.14952 4.96146 5.2454 5.84316 4.0125 5.84316Z"/>
									<Path fill = {"black"}     d = "M11.4699 11.2081C12.1798 11.2081 12.6655 10.7 12.6655 10.0275C12.6655 9.34757 12.1798 8.84694 11.4699 8.84694C10.7676 8.84694 10.2744 9.34757 10.2744 10.0275C10.2744 10.7 10.7676 11.2081 11.4699 11.2081ZM11.4699 5.60406C12.1798 5.60406 12.6655 5.10343 12.6655 4.43094C12.6655 3.75098 12.1798 3.25035 11.4699 3.25035C10.7676 3.25035 10.2744 3.75098 10.2744 4.43094C10.2744 5.10343 10.7676 5.60406 11.4699 5.60406Z"/>
									<Path fill = {"black"}     d = "M19.6596 11.0512H21.5052V9.04121H22.9623V7.4123H21.5052V0.268995H18.7854C16.88 3.13827 15.3632 5.53681 14.3918 7.32263V9.04121H19.6596V11.0512ZM16.1776 7.34505C17.433 5.13332 18.5538 3.36243 19.5849 1.83813H19.6895V7.45713H16.1776V7.34505Z"/>
									<Path fill = {"black"}     d = "M27.0722 11.0512H29V0.268995H27.0797L24.2627 2.24162V4.0947L26.9452 2.21173H27.0722V11.0512Z"/>
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
			<View style = {noneModeStyles._Navbar_Simple}    >
				<View style = {noneModeStyles._Icon_Home_2}    >
					<View style = {noneModeStyles._layer_0c810f}    >
					</View>
					<View style = {noneModeStyles._layer_9d5e8b}    >
						<View style = {noneModeStyles._layer_feae43}   >
							<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
								<Path fill = {"#A095C1"}     d = "M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Chart}    >
					<View style = {noneModeStyles._layer_3f0d66}    >
					</View>
					<View style = {noneModeStyles._layer_f065ef}    >
						<View style = {noneModeStyles._layer_f74c8d}   >
							<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
								<Path fill = {"#A095C1"}     d = "M4.5 18H1C0.45 18 0 17.55 0 17V7C0 6.45 0.45 6 1 6H4.5C5.05 6 5.5 6.45 5.5 7V17C5.5 17.55 5.05 18 4.5 18ZM11.75 0H8.25C7.7 0 7.25 0.45 7.25 1V17C7.25 17.55 7.7 18 8.25 18H11.75C12.3 18 12.75 17.55 12.75 17V1C12.75 0.45 12.3 0 11.75 0ZM19 8H15.5C14.95 8 14.5 8.45 14.5 9V17C14.5 17.55 14.95 18 15.5 18H19C19.55 18 20 17.55 20 17V9C20 8.45 19.55 8 19 8Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Bell}    >
					<View style = {noneModeStyles._layer_384410}    >
					</View>
					<View style = {noneModeStyles._layer_103393}    >
						<View style = {noneModeStyles._layer_717e0f}   >
							<Svg style={{height: 20, width: 16}} viewBox = "0 0 16 20">
								<Path fill = {"#A095C1"}     d = "M7.781 20C8.90921 20 9.83228 19.0769 9.83228 17.9487H5.72972C5.72972 19.0769 6.64254 20 7.781 20ZM13.9348 13.8462V8.71795C13.9348 5.56923 12.2528 2.93333 9.31946 2.2359V1.53846C9.31946 0.68718 8.63228 0 7.781 0C6.92972 0 6.24254 0.68718 6.24254 1.53846V2.2359C3.29895 2.93333 1.62716 5.55897 1.62716 8.71795V13.8462L0.304079 15.1692C-0.342075 15.8154 0.109207 16.9231 1.02203 16.9231H14.5297C15.4425 16.9231 15.9041 15.8154 15.2579 15.1692L13.9348 13.8462Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Setting}    >
					<View style = {noneModeStyles._layer_dbeb2e}    >
					</View>
					<View style = {noneModeStyles._layer_e9b5e8}    >
						<View style = {noneModeStyles._layer_65e90c}   >
							<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
								<Path fill = {"#432C81"}     d = "M17.1593 10.98C17.1993 10.66 17.2293 10.34 17.2293 10C17.2293 9.66 17.1993 9.34 17.1593 9.02L19.2693 7.37C19.4593 7.22 19.5093 6.95 19.3893 6.73L17.3893 3.27C17.2693 3.05 16.9993 2.97 16.7793 3.05L14.2893 4.05C13.7693 3.65 13.2093 3.32 12.5993 3.07L12.2193 0.42C12.1893 0.18 11.9793 0 11.7293 0H7.72933C7.47933 0 7.26933 0.18 7.23933 0.42L6.85933 3.07C6.24933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.44933 2.96 2.18933 3.05 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668302 7.22 0.189332 7.37L2.29933 9.02C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.66 2.29933 10.98L0.189332 12.63C-0.000668302 12.78 -0.0506684 13.05 0.0693316 13.27L2.06933 16.73C2.18933 16.95 2.45933 17.03 2.67933 16.95L5.16933 15.95C5.68933 16.35 6.24933 16.68 6.85933 16.93L7.23933 19.58C7.26933 19.82 7.47933 20 7.72933 20H11.7293C11.9793 20 12.1893 19.82 12.2193 19.58L12.5993 16.93C13.2093 16.68 13.7693 16.34 14.2893 15.95L16.7793 16.95C17.0093 17.04 17.2693 16.95 17.3893 16.73L19.3893 13.27C19.5093 13.05 19.4593 12.78 19.2693 12.63L17.1593 10.98ZM9.72933 13.5C7.79933 13.5 6.22933 11.93 6.22933 10C6.22933 8.07 7.79933 6.5 9.72933 6.5C11.6593 6.5 13.2293 8.07 13.2293 10C13.2293 11.93 11.6593 13.5 9.72933 13.5Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Navbar_Simple_2}    >
				<View style = {noneModeStyles._Icon_Home}    >
					<View style = {noneModeStyles._layer_6971a3}    >
					</View>
					<View style = {noneModeStyles._layer_07ae38}    >
						<View style = {noneModeStyles._layer_f8c7ac}   >
							<Svg style={{height: 17, width: 19}} viewBox = "0 0 19 17">
								<Path fill = {"#A095C1"}     d = "M7.34694 15.9793V10.8757H11.4298V15.9793C11.4298 16.5406 11.8891 17 12.4505 17H15.5126C16.074 17 16.5334 16.5406 16.5334 15.9793V8.83427H18.2686C18.7381 8.83427 18.9626 8.25246 18.6054 7.94625L10.0722 0.260282C9.68437 -0.0867606 9.09236 -0.0867606 8.70449 0.260282L0.171329 7.94625C-0.175714 8.25246 0.0386359 8.83427 0.508164 8.83427H2.24338V15.9793C2.24338 16.5406 2.7027 17 3.26409 17H6.32623C6.88762 17 7.34694 16.5406 7.34694 15.9793Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Language}    >
					<View style = {noneModeStyles._layer_e6c6da}    >
					</View>
					<View style = {noneModeStyles._layer_fe17c1}    >
						<View style = {noneModeStyles._layer_afaff1}   >
							<Svg style={{height: 20, width: 20}} viewBox = "0 0 20 20">
								<Path fill = {"#A095C1"}     d = "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17.93C5.05 17.44 2 14.08 2 10C2 9.38 2.08 8.79 2.21 8.21L7 13V14C7 15.1 7.9 16 9 16V17.93ZM15.9 15.39C15.64 14.58 14.9 14 14 14H13V11C13 10.45 12.55 10 12 10H6V8H8C8.55 8 9 7.55 9 7V5H11C12.1 5 13 4.1 13 3V2.59C15.93 3.78 18 6.65 18 10C18 12.08 17.2 13.97 15.9 15.39Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Edit}    >
					<View style = {noneModeStyles._layer_7ab1af}    >
					</View>
					<View style = {noneModeStyles._layer_3384a1}    >
						<View style = {noneModeStyles._layer_4868de}   >
							<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
								<Path fill = {"#432C81"}     d = "M0 15.2639V18.4724C0 18.7679 0.232191 19.0001 0.527706 19.0001H3.73616C3.87336 19.0001 4.01057 18.9473 4.10555 18.8418L15.6307 7.3272L11.6729 3.3694L0.158312 14.884C0.0527707 14.9895 0 15.1161 0 15.2639ZM18.6914 4.2665C19.103 3.85489 19.103 3.18998 18.6914 2.77837L16.2217 0.308708C15.8101 -0.102903 15.1452 -0.102903 14.7336 0.308708L12.8022 2.24011L16.7599 6.19791L18.6914 4.2665Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_Person}    >
					<View style = {noneModeStyles._layer_f88fc1}    >
					</View>
					<View style = {noneModeStyles._layer_fec311}    >
						<View style = {noneModeStyles._layer_03e499}   >
							<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
								<Path fill = {"#A095C1"}     d = "M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Settings}   >
				Settings
			</Text>
			<View style = {noneModeStyles._Options_List}    >
				<View style = {noneModeStyles._Setting_Row}    >
					<View style = {noneModeStyles._Icon_Person_2}    >
						<View style = {noneModeStyles._layer_1dfb84}    >
						</View>
						<View style = {noneModeStyles._layer_038f6d}    >
							<View style = {noneModeStyles._layer_538195}   >
								<Svg style={{height: 14, width: 14}} viewBox = "0 0 14 14">
									<Path fill = {"#A095C1"}     d = "M6.99998 6.99998C8.93372 6.99998 10.5 5.43373 10.5 3.49999C10.5 1.56624 8.93372 0 6.99998 0C5.06623 0 3.49999 1.56624 3.49999 3.49999C3.49999 5.43373 5.06623 6.99998 6.99998 6.99998ZM6.99998 8.74997C4.66374 8.74997 0 9.92247 0 12.25V13.125C0 13.6062 0.393749 14 0.874997 14H13.125C13.6062 14 14 13.6062 14 13.125V12.25C14 9.92247 9.33622 8.74997 6.99998 8.74997Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._Account}   >
						Account
					</Text>
					<View style = {noneModeStyles._Icon_Right_Arrow}    >
						<View style = {noneModeStyles._layer_a418a4}    >
							<View style = {noneModeStyles._layer_16681f}   >
								<Svg style={{height: 12, width: 7}} viewBox = "0 0 7 12">
									<Path fill = {"#A095C1"}     d = "M0.310894 10.0589L4.43544 5.93436L0.310894 1.80981C-0.103687 1.39522 -0.103687 0.725517 0.310894 0.310936C0.725475 -0.103645 1.39518 -0.103645 1.80976 0.310936L6.68906 5.19024C7.10365 5.60482 7.10365 6.27452 6.68906 6.68911L1.80976 11.5684C1.39518 11.983 0.725475 11.983 0.310894 11.5684C-0.0930566 11.1538 -0.103687 10.4735 0.310894 10.0589Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Setting_Row_2}    >
					<View style = {noneModeStyles._Icon_Bell_2}    >
						<View style = {noneModeStyles._layer_543fc3}    >
						</View>
						<View style = {noneModeStyles._layer_80d648}    >
							<View style = {noneModeStyles._layer_1cad50}   >
								<Svg style={{height: 17, width: 13}} viewBox = "0 0 13 17">
									<Path fill = {"#A095C1"}     d = "M6.50105 16.7101C7.44367 16.7101 8.2149 15.9388 8.2149 14.9962H4.7872C4.7872 15.9388 5.54986 16.7101 6.50105 16.7101ZM11.6426 11.5685V7.28387C11.6426 4.65311 10.2372 2.45081 7.78644 1.8681V1.28539C7.78644 0.57414 7.2123 0 6.50105 0C5.7898 0 5.21566 0.57414 5.21566 1.28539V1.8681C2.75628 2.45081 1.35949 4.64454 1.35949 7.28387V11.5685L0.254059 12.6739C-0.285804 13.2138 0.0912429 14.1393 0.853907 14.1393H12.1396C12.9023 14.1393 13.2879 13.2138 12.748 12.6739L11.6426 11.5685Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._Account_2}   >
						Notification
					</Text>
					<View style = {noneModeStyles._Icon_Right_Arrow_2}    >
						<View style = {noneModeStyles._layer_cc67c1}    >
							<View style = {noneModeStyles._layer_603c7e}   >
								<Svg style={{height: 12, width: 7}} viewBox = "0 0 7 12">
									<Path fill = {"#A095C1"}     d = "M0.310894 10.0589L4.43544 5.93436L0.310894 1.80981C-0.103687 1.39522 -0.103687 0.725517 0.310894 0.310936C0.725475 -0.103645 1.39518 -0.103645 1.80976 0.310936L6.68906 5.19024C7.10365 5.60482 7.10365 6.27452 6.68906 6.68911L1.80976 11.5684C1.39518 11.983 0.725475 11.983 0.310894 11.5684C-0.0930566 11.1538 -0.103687 10.4735 0.310894 10.0589Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Setting_Row_3}    >
					<View style = {noneModeStyles._Icon_Eye}    >
						<View style = {noneModeStyles._layer_c30528}    >
						</View>
						<View style = {noneModeStyles._layer_40715f}    >
							<View style = {noneModeStyles._layer_2c80a2}   >
								<Svg style={{height: 13, width: 19}} viewBox = "0 0 19 13">
									<Path fill = {"#A095C1"}     d = "M9.49998 0C5.18181 0 1.49409 2.6859 0 6.47726C1.49409 10.2686 5.18181 12.9545 9.49998 12.9545C13.8181 12.9545 17.5059 10.2686 19 6.47726C17.5059 2.6859 13.8181 0 9.49998 0ZM9.49998 10.7954C7.11635 10.7954 5.18181 8.86089 5.18181 6.47726C5.18181 4.09363 7.11635 2.15909 9.49998 2.15909C11.8836 2.15909 13.8181 4.09363 13.8181 6.47726C13.8181 8.86089 11.8836 10.7954 9.49998 10.7954ZM9.49998 3.88636C8.06635 3.88636 6.90907 5.04363 6.90907 6.47726C6.90907 7.91089 8.06635 9.06816 9.49998 9.06816C10.9336 9.06816 12.0909 7.91089 12.0909 6.47726C12.0909 5.04363 10.9336 3.88636 9.49998 3.88636Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._Account_3}   >
						Appearance
					</Text>
					<View style = {noneModeStyles._Icon_Right_Arrow_3}    >
						<View style = {noneModeStyles._layer_e1726a}    >
							<View style = {noneModeStyles._layer_4cd89d}   >
								<Svg style={{height: 12, width: 7}} viewBox = "0 0 7 12">
									<Path fill = {"#A095C1"}     d = "M0.310894 10.0589L4.43544 5.93436L0.310894 1.80981C-0.103687 1.39522 -0.103687 0.725517 0.310894 0.310936C0.725475 -0.103645 1.39518 -0.103645 1.80976 0.310936L6.68906 5.19024C7.10365 5.60482 7.10365 6.27452 6.68906 6.68911L1.80976 11.5684C1.39518 11.983 0.725475 11.983 0.310894 11.5684C-0.0930566 11.1538 -0.103687 10.4735 0.310894 10.0589Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Setting_Row_4}    >
					<View style = {noneModeStyles._Icon_Security}    >
						<View style = {noneModeStyles._layer_49336d}    >
						</View>
						<View style = {noneModeStyles._layer_1f478d}    >
							<View style = {noneModeStyles._layer_512b8f}   >
								<Svg style={{height: 19, width: 15}} viewBox = "0 0 15 19">
									<Path fill = {"#A095C1"}     d = "M6.825 0.14375L0.991667 2.73542C0.391667 3.00208 0 3.60208 0 4.26042V8.17708C0 12.8021 3.2 17.1271 7.5 18.1771C11.8 17.1271 15 12.8021 15 8.17708V4.26042C15 3.60208 14.6083 3.00208 14.0083 2.73542L8.175 0.14375C7.75 -0.0479167 7.25 -0.0479167 6.825 0.14375ZM7.5 9.00208H13.3333C12.8917 12.4354 10.6 15.4937 7.5 16.4521V9.01042H1.66667V4.26042L7.5 1.66875V9.00208Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._Account_4}   >
						Privacy & Security
					</Text>
					<View style = {noneModeStyles._Icon_Right_Arrow_4}    >
						<View style = {noneModeStyles._layer_0359d1}    >
							<View style = {noneModeStyles._layer_9e5495}   >
								<Svg style={{height: 12, width: 7}} viewBox = "0 0 7 12">
									<Path fill = {"#A095C1"}     d = "M0.310894 10.0589L4.43544 5.93436L0.310894 1.80981C-0.103687 1.39522 -0.103687 0.725517 0.310894 0.310936C0.725475 -0.103645 1.39518 -0.103645 1.80976 0.310936L6.68906 5.19024C7.10365 5.60482 7.10365 6.27452 6.68906 6.68911L1.80976 11.5684C1.39518 11.983 0.725475 11.983 0.310894 11.5684C-0.0930566 11.1538 -0.103687 10.4735 0.310894 10.0589Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Setting_Row_5}    >
					<View style = {noneModeStyles._Icon_Volume}    >
						<View style = {noneModeStyles._layer_13fe5d}    >
							<View style = {noneModeStyles._layer_57ba39}   >
								<Svg style={{height: 15, width: 15}} viewBox = "0 0 15 15">
									<Path fill = {"#A095C1"}     d = "M0 5.38418V8.71752C0 9.17585 0.375 9.55085 0.833333 9.55085H3.33333L6.075 12.2925C6.6 12.8175 7.5 12.4425 7.5 11.7009V2.39252C7.5 1.65085 6.6 1.27585 6.075 1.80085L3.33333 4.55085H0.833333C0.375 4.55085 0 4.92585 0 5.38418ZM11.25 7.05085C11.25 5.57585 10.4 4.30918 9.16667 3.69252V10.4009C10.4 9.79252 11.25 8.52585 11.25 7.05085ZM9.16667 0.759185V0.925852C9.16667 1.24252 9.375 1.51752 9.66667 1.63419C11.8167 2.49252 13.3333 4.60085 13.3333 7.05085C13.3333 9.50085 11.8167 11.6092 9.66667 12.4675C9.36667 12.5842 9.16667 12.8592 9.16667 13.1759V13.3425C9.16667 13.8675 9.69167 14.2342 10.175 14.0509C13 12.9759 15 10.2509 15 7.05085C15 3.85085 13 1.12585 10.175 0.0508521C9.69167 -0.140815 9.16667 0.234185 9.16667 0.759185Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._Account_5}   >
						Sound
					</Text>
					<View style = {noneModeStyles._Icon_Right_Arrow_5}    >
						<View style = {noneModeStyles._layer_d82788}    >
							<View style = {noneModeStyles._layer_fdbd10}   >
								<Svg style={{height: 12, width: 7}} viewBox = "0 0 7 12">
									<Path fill = {"#A095C1"}     d = "M0.310894 10.0589L4.43544 5.93436L0.310894 1.80981C-0.103687 1.39522 -0.103687 0.725517 0.310894 0.310936C0.725475 -0.103645 1.39518 -0.103645 1.80976 0.310936L6.68906 5.19024C7.10365 5.60482 7.10365 6.27452 6.68906 6.68911L1.80976 11.5684C1.39518 11.983 0.725475 11.983 0.310894 11.5684C-0.0930566 11.1538 -0.103687 10.4735 0.310894 10.0589Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Setting_Row_6}    >
					<View style = {noneModeStyles._Icon_Language_2}    >
						<View style = {noneModeStyles._layer_f44807}    >
						</View>
						<View style = {noneModeStyles._layer_2c0935}    >
							<View style = {noneModeStyles._layer_6dca4d}   >
								<Svg style={{height: 17, width: 17}} viewBox = "0 0 17 17">
									<Path fill = {"#A095C1"}     d = "M8.49996 0C3.80798 0 0 3.80798 0 8.49996C0 13.1919 3.80798 16.9999 8.49996 16.9999C13.1919 16.9999 16.9999 13.1919 16.9999 8.49996C16.9999 3.80798 13.1919 0 8.49996 0ZM7.64996 15.2404C4.29248 14.8239 1.69999 11.9679 1.69999 8.49996C1.69999 7.97296 1.76799 7.47146 1.87849 6.97847L5.94997 11.0499V11.8999C5.94997 12.8349 6.71497 13.5999 7.64996 13.5999V15.2404ZM13.5149 13.0814C13.2939 12.3929 12.6649 11.8999 11.8999 11.8999H11.0499V9.34995C11.0499 8.88246 10.6674 8.49996 10.2 8.49996H5.09998V6.79997H6.79997C7.26747 6.79997 7.64996 6.41747 7.64996 5.94997V4.24998H9.34995C10.285 4.24998 11.0499 3.48498 11.0499 2.54999V2.20149C13.5404 3.21298 15.2999 5.65247 15.2999 8.49996C15.2999 10.268 14.6199 11.8744 13.5149 13.0814Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._Account_6}   >
						Language
					</Text>
					<View style = {noneModeStyles._Icon_Right_Arrow_6}    >
						<View style = {noneModeStyles._layer_c78734}    >
							<View style = {noneModeStyles._layer_c7354f}   >
								<Svg style={{height: 12, width: 7}} viewBox = "0 0 7 12">
									<Path fill = {"#A095C1"}     d = "M0.310894 10.0589L4.43544 5.93436L0.310894 1.80981C-0.103687 1.39522 -0.103687 0.725517 0.310894 0.310936C0.725475 -0.103645 1.39518 -0.103645 1.80976 0.310936L6.68906 5.19024C7.10365 5.60482 7.10365 6.27452 6.68906 6.68911L1.80976 11.5684C1.39518 11.983 0.725475 11.983 0.310894 11.5684C-0.0930566 11.1538 -0.103687 10.4735 0.310894 10.0589Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Profile_Info}    >
				<View style = {noneModeStyles._Profile_Image}    >
					<View style = {noneModeStyles._Profile_Image_2}    >
						<View style = {noneModeStyles._Lifesavers_Avatar_container}    >
							<View style = {noneModeStyles._Lifesavers_Avatar}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Lifesavers_Avatar_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Edit_Icon}    >
						<View style = {noneModeStyles._Icon_Edit_2}    >
							<View style = {noneModeStyles._layer_face1d}    >
							</View>
							<View style = {noneModeStyles._layer_421335}    >
								<View style = {noneModeStyles._layer_79ee0e}   >
									<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
										<Path fill = {"#432C81"}     d = "M0 12.8537V15.5555C0 15.8044 0.195527 15.9999 0.444379 15.9999H3.14621C3.26174 15.9999 3.37728 15.9554 3.45727 15.8666L13.1625 6.17021L9.82967 2.83736L0.133314 12.5337C0.044438 12.6226 0 12.7292 0 12.8537ZM15.7399 3.59281C16.0865 3.24619 16.0865 2.68627 15.7399 2.33966L13.6602 0.259962C13.3136 -0.086654 12.7537 -0.086654 12.4071 0.259962L10.7806 1.88639L14.1135 5.21924L15.7399 3.59281Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Kristin_Hennessy}   >
					Kristin Hennessy
				</Text>
				<Text style = {noneModeStyles._kristin_hennessy_mail_com}   >
					kristin.hennessy@mail.com
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Settings_V1

const noneModeStyles = StyleSheet.create({
_page14: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_IPhone_X__or_newer_: {
	width: 375,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
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
	height: 20.6665,
	position: "absolute",
	left: 293.667,
	top: 8,
	},
_Battery: {
	width: 24.328,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateX: 42.3334},
		{translateY: 9.33325},
	],
	},
_layer_708c03: {
	width: 22,
	height: 11.3333,
	position: "absolute",
	top: 0,
	right: 2.328,
	},
_layer_659cf4: {
	},
_layer_2886a1: {
	width: 1.328,
	height: 4,
	position: "absolute",
	top: 3.66675,
	right: 0,
	},
_layer_be2d9b: {
	},
_layer_35b81d: {
	width: 18,
	height: 7.33325,
	position: "absolute",
	top: 2,
	right: 4.328,
	},
_layer_c1791a: {
	},
_Wifi: {
	width: 15.2723,
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
_layer_d792b5: {
	width: 28.4261,
	height: 11.0889,
	position: "absolute",
	left: 12.4535,
	top: 5.16748,
	},
_layer_c8ab90: {
	},
_Home_Indicator: {
	width: 375,
	height: 34,
	backgroundColor: "rgb(255, 255, 255)",
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
_Navbar_Simple: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	position: "absolute",
	left: 0,
	top: 722,
	right: 0,
	paddingTop: 16,
	paddingRight: 32,
	paddingBottom: 16,
	paddingLeft: 32,
	shadowOffset: {
		width: 0,
		height: -1
	},
	shadowColor: "rgba(0,0,0,0.08)",
	shadowRadius: 4,
	},
_Icon_Home_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_0c810f: {
	position: "absolute",
	},
_layer_9d5e8b: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3},
	],
	},
_layer_feae43: {
	},
_Icon_Chart: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_3f0d66: {
	position: "absolute",
	},
_layer_f065ef: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
_layer_f74c8d: {
	},
_Icon_Bell: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_384410: {
	position: "absolute",
	},
_layer_103393: {
	position: "absolute",
	transform: [
		{translateX: 4.41357},
		{translateY: 2.5},
	],
	},
_layer_717e0f: {
	},
_Icon_Setting: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_dbeb2e: {
	position: "absolute",
	},
_layer_e9b5e8: {
	position: "absolute",
	transform: [
		{translateX: 2.27063},
		{translateY: 2},
	],
	},
_layer_65e90c: {
	},
_Navbar_Simple_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	position: "absolute",
	left: 0,
	top: 722,
	right: 0,
	paddingTop: 16,
	paddingRight: 32,
	paddingBottom: 16,
	paddingLeft: 32,
	shadowOffset: {
		width: 0,
		height: -1
	},
	shadowColor: "rgba(0,0,0,0.08)",
	shadowRadius: 4,
	},
_Icon_Home: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_6971a3: {
	position: "absolute",
	},
_layer_07ae38: {
	position: "absolute",
	transform: [
		{translateX: 2.80212},
		{translateY: 3.34497},
	],
	},
_layer_f8c7ac: {
	},
_Icon_Language: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_e6c6da: {
	position: "absolute",
	},
_layer_fe17c1: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 2},
	],
	},
_layer_afaff1: {
	},
_Icon_Edit: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 61,
	},
_layer_7ab1af: {
	position: "absolute",
	},
_layer_3384a1: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 2.99756},
	],
	},
_layer_4868de: {
	},
_Icon_Person: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_f88fc1: {
	position: "absolute",
	},
_layer_fec311: {
	position: "absolute",
	transform: [
		{translateX: 4},
		{translateY: 4},
	],
	},
_layer_03e499: {
	},
_Settings: {
	width: 343,
	height: "auto",
	position: "absolute",
	left: 16,
	top: 68,
	color: "rgb(67, 44, 129)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Options_List: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 342,
	right: 0,
	paddingRight: 8,
	paddingLeft: 16,
	},
_Setting_Row: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	marginBottom: 24,
	},
_Icon_Person_2: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 16,
	},
_layer_1dfb84: {
	position: "absolute",
	},
_layer_038f6d: {
	position: "absolute",
	transform: [
		{translateX: 3.33337},
		{translateY: 3.33325},
	],
	},
_layer_538195: {
	},
_Account: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 16,
	color: "rgb(86, 66, 143)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Icon_Right_Arrow: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_a418a4: {
	position: "absolute",
	transform: [
		{translateX: 8.41748},
		{translateY: 6.41748},
	],
	},
_layer_16681f: {
	},
_Setting_Row_2: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	marginBottom: 24,
	},
_Icon_Bell_2: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 16,
	},
_layer_543fc3: {
	position: "absolute",
	},
_layer_80d648: {
	position: "absolute",
	transform: [
		{translateX: 3.67798},
		{translateY: 2.08325},
	],
	},
_layer_1cad50: {
	},
_Account_2: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 16,
	color: "rgb(86, 66, 143)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Icon_Right_Arrow_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_cc67c1: {
	position: "absolute",
	transform: [
		{translateX: 8.41748},
		{translateY: 6.41748},
	],
	},
_layer_603c7e: {
	},
_Setting_Row_3: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	marginBottom: 24,
	},
_Icon_Eye: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 16,
	},
_layer_c30528: {
	position: "absolute",
	},
_layer_40715f: {
	position: "absolute",
	transform: [
		{translateX: 0.833374},
		{translateY: 3.33325},
	],
	},
_layer_2c80a2: {
	},
_Account_3: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 16,
	color: "rgb(86, 66, 143)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Icon_Right_Arrow_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_e1726a: {
	position: "absolute",
	transform: [
		{translateX: 8.41748},
		{translateY: 6.41748},
	],
	},
_layer_4cd89d: {
	},
_Setting_Row_4: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	marginBottom: 24,
	},
_Icon_Security: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 16,
	},
_layer_49336d: {
	position: "absolute",
	},
_layer_1f478d: {
	position: "absolute",
	transform: [
		{translateX: 2.5},
		{translateY: 0.989502},
	],
	},
_layer_512b8f: {
	},
_Account_4: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 16,
	color: "rgb(86, 66, 143)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Icon_Right_Arrow_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_0359d1: {
	position: "absolute",
	transform: [
		{translateX: 8.41748},
		{translateY: 6.41748},
	],
	},
_layer_9e5495: {
	},
_Setting_Row_5: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	marginBottom: 24,
	},
_Icon_Volume: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 16,
	},
_layer_13fe5d: {
	position: "absolute",
	transform: [
		{translateX: 2.5},
		{translateY: 2.94922},
	],
	},
_layer_57ba39: {
	},
_Account_5: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 16,
	color: "rgb(86, 66, 143)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Icon_Right_Arrow_5: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_d82788: {
	position: "absolute",
	transform: [
		{translateX: 8.41748},
		{translateY: 6.41748},
	],
	},
_layer_fdbd10: {
	},
_Setting_Row_6: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_Icon_Language_2: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 16,
	},
_layer_f44807: {
	position: "absolute",
	},
_layer_2c0935: {
	position: "absolute",
	transform: [
		{translateX: 1.66663},
		{translateY: 1.66675},
	],
	},
_layer_6dca4d: {
	},
_Account_6: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 16,
	color: "rgb(86, 66, 143)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Icon_Right_Arrow_6: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_c78734: {
	position: "absolute",
	transform: [
		{translateX: 8.41748},
		{translateY: 6.41748},
	],
	},
_layer_c7354f: {
	},
_Profile_Info: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 16,
	top: 124,
	right: 16,
	},
_Profile_Image: {
	width: 122,
	height: 112,
	flexShrink: 0,
	marginBottom: 12,
	},
_Profile_Image_2: {
	width: 112,
	height: "auto",
	backgroundColor: "rgb(237, 236, 244)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: "50%",
	top: 0,
	transform: [
		{translateX: -61},
	],
	paddingTop: 8,
	paddingRight: 8,
	paddingBottom: 8,
	paddingLeft: 8,
	borderRadius: 100,
	},
_Lifesavers_Avatar_container: {
	width: 96,
	height: 96,
	flexShrink: 0,
	},
_Lifesavers_Avatar: {
	width: "100%",
	height: "100%",
	},
_Edit_Icon: {
	width: 36,
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: "50%",
	top: 76,
	transform: [
		{translateX: 25},
	],
	paddingTop: 8,
	paddingRight: 8,
	paddingBottom: 8,
	paddingLeft: 8,
	borderRadius: 100,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.16)",
	shadowRadius: 8,
	},
_Icon_Edit_2: {
	width: 20,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_face1d: {
	position: "absolute",
	},
_layer_421335: {
	position: "absolute",
	transform: [
		{translateX: 2.5},
		{translateY: 2.4978},
	],
	},
_layer_79ee0e: {
	},
_Kristin_Hennessy: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	marginBottom: 12,
	color: "rgb(67, 44, 129)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "center",
	},
_kristin_hennessy_mail_com: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(123, 107, 168)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "center",
	},
})

