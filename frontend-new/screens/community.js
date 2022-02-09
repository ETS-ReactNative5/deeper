import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    Platform
} from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";

// Functional component for community page
const Community = () => {
    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                <ScrollView>
                    {/* Header */}
                    <View style={styles.headerWrapper}>
                        <Text style={styles.headerTitle}>
                            <Text>
                                Community Feed
                            </Text>
                        </Text>
                    </View>
                    {/* Search Bar */}
                    <View style={styles.searchWrapper}>
                        <Image source={require('../assets/icons/search.png')}
                        style={styles.searchIcon}
                        />
                        <View style={styles.search}>
                            <TextInput 
                                style={styles.searchText}
                                placeholder="Search" />
                        </View>
                    </View>
                </ScrollView>
                {/* Buttons */}
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addTitle}>
                        <Text>
                            +
                        </Text>
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default Community; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 50 : 15,
        alignItems: 'center',
      },
      headerTitle: {
        color: COLORS.primary,
        fontFamily: 'Avenir-Medium',
        fontSize: SIZES.body1,
        top: 6,
      },
      searchWrapper:
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width-40,
        height: Dimensions.get("window").height/20,
        marginVertical: 15,
        marginHorizontal: 20,
        backgroundColor: '#EAE9E9',
        top: 5,
        borderRadius: 10,
      },
      searchIcon: {
        width: 25,
        height: 25,
        borderRadius: 20,
        left: 10,
      },
      search:
      {
        flex: 1,
        marginLeft: 15,
      },
      searchText:
      {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#747480',
      },
      addButton:
      {
        width: 60,
        height: 60,
        backgroundColor: '#FEC62F',
        borderRadius: 100,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 15,
      },
      addTitle:
      {
        fontFamily: 'Avenir',
        fontSize: 40,
        bottom: 0, 
        alignSelf: 'center',
      },
})