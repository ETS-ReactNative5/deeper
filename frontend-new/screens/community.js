import React, { useState, useEffect } from "react";
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
    Platform,
    FlatList,
    StackNavigator
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Ionicons } from "@expo/vector-icons/Ionicons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from "moment";
import Fire from "../Fire";
import { useIsFocused } from '@react-navigation/native';

import { COLORS, SIZES, FONTS } from "../constants";

// temporary data until we pull from Firebase
/*posts = [
  {
      id: "1",
      name: "Joe McKay",
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: 1569109273726,
      //avatar: require("../assets/tempAvatar.jpg"),
      //image: require("../assets/tempImage1.jpg")
  },
  {
      id: "2",
      name: "Karyn Kim",
      text:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: 1569109273726,
      //avatar: require("../assets/tempAvatar.jpg"),
      //image: require("../assets/tempImage2.jpg")
  },
  {
      id: "3",
      name: "Emerson Parsons",
      text:
          "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
      timestamp: 1569109273726,
      //avatar: require("../assets/tempAvatar.jpg"),
      //image: require("../assets/tempImage3.jpg")
  },
  {
      id: "4",
      name: "Kathie Malone",
      text:
          "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
      timestamp: 1569109273726,
     // avatar: require("../assets/tempAvatar.jpg"),
      //image: require("../assets/tempImage4.jpg")
  }
];*/

// Functional component for community page
const Community = ({navigation}) => {
  /*renderPost = post => {
    return (
        <View style={styles.feedItem}>
            <Image source={post.avatar} style={styles.avatar} />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={styles.name}>{post.name}</Text>
                        <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                    </View>

                    <Ionicons name="ios-more" size={24} color="#73788B" />
                </View>
                <Text style={styles.post}>{post.text}</Text>
                <Image source={post.image} style={styles.postImage} resizeMode="cover" />
                <View style={{ flexDirection: "row" }}>
                    <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }} />
                    <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
                </View>
            </View>
        </View>
    );
  }*/

  const [posts, setPosts] = useState(null);

  const fetchData = async () => {
    const query = await Fire.shared.firestore.collection("posts").orderBy('timestamp', 'desc').get();
    const posts2 = [];
    query.forEach(doc => posts2.push(doc.data()));
    //this.setState({ postal: posts })
    setPosts(posts2);
    console.log(posts2);
}
  //state = { postal: [] }
  //const posts = [];
  const isFocused = useIsFocused();
  useEffect(() => {
  fetchData();
    },[isFocused]);

  //componentDidMount() {
  //fetchData();
  //}

  renderPost = post => {
    return (
        <View style={styles.feedItem}>
            <Image source={{uri: post.image}} style={styles.avatar} />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={styles.name}>{post.text}</Text>
                        <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                    </View>

                    <Ionicons name="ios-more" size={24} color="#73788B" />
                </View>
                <Text style={styles.post}>{post.text}</Text>
                <Image source={{uri: post.image}} style={styles.postImage} resizeMode="cover" />
                <View style={{ flexDirection: "row" }}>
                    <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }} />
                    <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
                </View>
            </View>
        </View>
    );
  }
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
                    {/* Questions */}
                    <View style={styles.questionsWrapper}>
                        <FlatList
                        style={styles.feed}
                        data={posts}
                        renderItem={({ item }) => this.renderPost(item)}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ></FlatList>
                    </View>
                </ScrollView>
                {/* Buttons */}
                <TouchableOpacity style={styles.addButton}
                onPress={() => navigation.navigate('Post_Screen')}>
                    <Text style={styles.addTitle}>
                        <Text>
                            +
                        </Text>
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
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
        fontSize: 30,
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
      questionsWrapper:
      {
        height: Dimensions.get("window").height/1.48,
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
        right: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      addTitle:
      {
        fontFamily: 'Avenir',
        fontSize: 40,
        bottom: 0, 
        alignSelf: 'center',
      },

    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
})