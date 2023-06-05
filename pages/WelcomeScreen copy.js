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
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState, useCallback, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

import YoutubeIframe from 'react-native-youtube-iframe';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const timeString = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />

      <Text>Ini adalah Viewo</Text>

      <YoutubeIframe
        height={500}
        width={WIDTH}
        play={playing}
        videoId={'1ZqpBi-zIBk'}
      />
      {/* <View style={styles.text_container}>
        <Text style={styles.h1_style}>Halo</Text>
        <Text style={styles.h1_style}>{currentTime}</Text>
      </View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'iee2TATGMyI'}
        onChangeState={onStateChange}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
      <View style={styles.menu_container}>
        <TouchableOpacity
          style={styles.menu_style}
          onPress={() => navigation.navigate('NakesScreen')}>
          <Image
            style={styles.icon_style}
            source={require('./../assets/img/icons/icon_nakes.png')}
          />
          <Text style={styles.menu_text}>Nakes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menu_style}
          onPress={() => navigation.navigate('PasienScreen')}>
          <Image
            style={styles.icon_style}
            source={require('./../assets/img/icons/icon_pasien.png')}
          />
          <Text style={styles.menu_text}>Pasien</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom_logo}>
        <Image
          style={styles.bottom_logo_img}
          resizeMode="contain"
          source={require('./../assets/img/icons/logo_rsud.png')}
        />
        
      </View> */}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  splash_logo: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_container: {
    marginBottom: 32,
    width: WIDTH,

    justifyContent: 'center',
    alignItems: 'center',
  },
  h1_style: {
    fontSize: 64,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: '#125873',
  },
  h3_style: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',

    color: '#484848',
  },
  menu_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: WIDTH,
    // backgroundColor: 'grey',
  },
  menu_style: {
    backgroundColor: '#D9D9D9',
    width: responsiveScreenWidth(40),
    height: responsiveScreenWidth(40),
    borderRadius: 200,
  },
  icon_style: {
    width: '100%',
    height: '100%',
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
  menu_text: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 24,
  },
});
