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
  ScrollView,
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
const images = [
  'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__480.jpg',
  'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__480.jpg',
  'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__480.jpg',
];

const COLORS = {
  primary: '#125873',
  white: '#FFFFFF',
  white_bg: '#F8F8F8',

  abusoft: '#EBF0FF',
  black: '#151515',
  black_soft: '#202020',
  coklat: '#1E1E1E',
  grey_soft: '#C9C9C9',
  font_color: '#E3E3E3',
  grey_1: '#484848',
  blue_bg: '#E8EFF1',
  shadow: '#1b2e5e',
};
const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [imgActive, setimgActive] = useState(0);

  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />

      <View style={styles.top_container}>
        <View style={styles.top_left_container}>
          <Text style={styles.selamat_style}>Selamat datang di</Text>
          <Text style={styles.allabout_style}>All About Stroke</Text>
        </View>
        <View style={styles.top_right_container}>
          <Image
            style={styles.img_hello_style}
            source={require('../assets/img/icons/icon_hello.png')}
          />
        </View>
      </View>

      <View style={styles.mid1_container}>
        <View
          style={{
            width: responsiveScreenWidth(90),
            height: responsiveScreenHeight(20),
            // backgroundColor: 'green',
          }}>
          <ScrollView
            style={{
              width: responsiveScreenWidth(90),
              height: responsiveScreenHeight(20),
            }}
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal>
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.img_style}
                source={require('../assets/img/icons/rsudajb.jpeg')}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.dot_style}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.mid2_container}>
        <View style={{height: responsiveScreenHeight(3)}}>
          <Text
            style={{
              fontFamily: 'Inter-SemiBold',
              fontSize: 15,
              color: COLORS.coklat,
            }}>
            Menu Edukasi Stroke
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: responsiveScreenHeight(20),
            width: responsiveScreenWidth(90),
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              width: responsiveScreenWidth(43),
              height: 100,
              borderRadius: 10,
              flexDirection: 'row',

              elevation: 5, // Adjust the elevation value to change the shadow intensity
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}>
            <View style={{width: '50%', height: '100%'}}>
              <Image
                style={{height: 100, width: 80}}
                source={require('../assets/img/icons/icon_nakes2.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'pink',
                width: '50%',
                height: '100%',
              }}>
              <Text
                style={{fontFamily: 'Inter-SemiBold', color: COLORS.primary}}>
                Nakes
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              width: responsiveScreenWidth(43),
              height: 100,
              borderRadius: 10,
              flexDirection: 'row',

              elevation: 5, // Adjust the elevation value to change the shadow intensity
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}>
            <View style={{width: '50%', height: '100%'}}>
              <Image
                style={{height: 100, width: 80}}
                source={require('../assets/img/icons/icon_pasien2.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'pink',
                width: '50%',
                height: '100%',
              }}>
              <Text
                style={{fontFamily: 'Inter-SemiBold', color: COLORS.primary}}>
                Pasien
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bot_container}>
        <View style={{height: responsiveScreenHeight(3)}}>
          <Text
            style={{
              fontFamily: 'Inter-SemiBold',
              fontSize: 15,
              color: COLORS.coklat,
            }}>
            Tentang All About Stroke
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.white,
            width: responsiveScreenWidth(90),
            height: responsiveHeight(12),
            borderRadius: 10,
            flexDirection: 'row',
            padding: 16,

            elevation: 5, // Adjust the elevation value to change the shadow intensity
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}>
          <View
            style={{
              width: '75%',
              justifyContent: 'center',
            }}>
            <Text style={{fontFamily: 'Inter', color: COLORS.coklat}}>
              Yuk, cari tahu tentang aplikasi
            </Text>
            <Text style={{fontFamily: 'Inter', color: COLORS.coklat}}>
              All About Stroke!
            </Text>
          </View>
          <View
            style={{
              width: '25%',
              // backgroundColor: 'pink',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: COLORS.blue_bg,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Image
                style={{height: '70%', width: '70%'}}
                source={require('../assets/img/icons/arrow-right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F1F4FF',
    paddingHorizontal: responsiveScreenWidth(5),
  },
  top_container: {
    // backgroundColor: 'pink',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(25),
    flexDirection: 'row',
  },
  mid1_container: {
    // backgroundColor: 'yellow',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(25),
  },
  mid2_container: {
    // backgroundColor: 'grey',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(18),
  },
  bot_container: {
    // backgroundColor: 'green',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(23),
  },
  top_left_container: {
    // backgroundColor: 'green',
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  top_right_container: {
    // backgroundColor: 'grey',
    width: '40%',
    height: '100%',
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  img_hello_style: {
    height: 100,
    width: 120,
  },
  selamat_style: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.coklat,
  },
  allabout_style: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: COLORS.primary,
  },
  img_style: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(20),
    borderRadius: 10,
  },
  dot_style: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    height: responsiveScreenHeight(5),
  },
  dotActive: {
    margin: 3,
    color: COLORS.primary,
  },
  dot: {
    margin: 3,
    color: 'grey',
  },
});
