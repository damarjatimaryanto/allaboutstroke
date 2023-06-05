import {
  StyleSheet,
  PermissionsAndroid,
  Text,
  Image,
  View,
  Animated,
  Alert,
  StatusBar,
  BackHandler,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      navigation.navigate('WelcomeScreen');
    }, 3000);
  }, []);

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent"></StatusBar>
      <ImageBackground
        style={styles.image_bg}
        resizeMode="cover"
        source={require('./../assets/img/icons/splash_bg.png')}>
        <View style={styles.splash_logo}>
          <Text style={{color: 'black'}}>Logo</Text>
        </View>

        <View style={styles.bottom_logo}>
          <Image
            style={styles.bottom_logo_img}
            resizeMode="contain"
            source={require('./../assets/img/icons/logo_rsud.png')}
          />
          {/* <Text style={styles.bottom_logo_text}>RSUD Ajibarang</Text> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash_logo: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_bg: {
    // flex: 1,
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_logo: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  bottom_logo_text: {
    color: 'white',
    fontFamily: 'Inter',
  },
  bottom_logo_img: {
    width: 35,
    height: 35,
  },
});
