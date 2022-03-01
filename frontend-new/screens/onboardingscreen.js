import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import { COLORS, SIZES, FONTS } from "../constants";

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? COLORS.primary : COLORS.secondary;

    return (
        <View 
            style={{
                ...styles.dot,
                width:6,
                height: 6,
                marginHorizontal: 5,
                backgroundColor,
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:20}}
        {...props}
    >
        <Text style={{fontSize:16,color: COLORS.primary}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:20}}
        {...props}
    >
        <Text style={{fontSize:16,color: COLORS.primary}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:20}}
        {...props}
    >
        <Text style={{fontSize:16,color: COLORS.primary}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding 
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Home")}
        onDone={() => navigation.navigate("Home")}
        pages={[
          {
            backgroundColor: '#ffffff',
            image: <Image source={require('../assets/images/onboarding1.png')}
                        style={styles.onboardingImage} />,
            title: <Text style={styles.title}>
                        <Text>
                            Ask and share
                        </Text>
                    </Text>,
            subtitle: <Text style={styles.subtitle}>
                        <Text>
                            With the community tab, you can ask questions anonymously or unanonymously to our diverse and open-minded community, as well as join conversations to share your own thoughts.
                        </Text>
                    </Text>,
          },
          {
            backgroundColor: '#ffffff',
            image: <Image source={require('../assets/images/onboarding2.png')}
                        style={styles.onboardingImage} />,
            title: <Text style={styles.title}>
                        <Text>
                            Express your feelings
                        </Text>
                    </Text>,
            subtitle: <Text style={styles.subtitle}>
                        <Text>
                        With the journal tab, you can write about your day or whatever you want to express your feelings. With this, we can provide you with your  mental health index and a way for self-reflection.
                        </Text>
                    </Text>,
          },
          {
            backgroundColor: '#ffffff',
            image: <Image source={require('../assets/images/onboarding3.png')}
                        style={styles.onboardingImage} />,
            title: <Text style={styles.title}>
                        <Text>
                            Message and connect
                        </Text>
                    </Text>,
            subtitle: <Text style={styles.subtitle}>
                        <Text>
                            With the inbox tab, you can draw or write letters of reassurance to your loved ones, as well as see how they’re doing with their statuses and journal entries if they choose to share any of them.
                        </Text>
                    </Text>,
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 3,
    marginHorizontal: 3,
  },
  onboardingImage: {
    width: 350,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.primary,
    fontFamily: 'Avenir-Medium',
    fontSize: Dimensions.get("window").height/25,
  },
  subtitle: {
    color: COLORS.primary,
    fontFamily: 'Avenir-Light',
    fontSize: Dimensions.get("window").height/50,
    marginHorizontal: 30,
    marginVertical: 10,
    textAlign: 'center'
  }
});