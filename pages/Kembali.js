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
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
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
export default Kembali = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        // backgroundColor: 'pink',
        height: responsiveScreenHeight(15),
        justifyContent: 'center',
        //   alignItems: 'center',
        paddingTop: 20,
      }}>
      <View
        style={{
          //   backgroundColor: '#f8f8f8',
          //   backgroundColor: 'grey',
          width: responsiveScreenWidth(93),
          height: responsiveScreenHeight(8),
          // justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 8,
        }}>
        <TouchableOpacity
          style={{
            // marginHorizontal: 15,
            backgroundColor: '#125873',
            padding: 8,
            borderRadius: 40,
            opacity: 0.7,
            marginVertical: 2,
            marginRight: 15,
          }}
          onPress={() => navigation.navigate('NakesScreen')}>
          <Image
            style={{height: 24, width: 24, tintColor: 'white'}}
            source={require('./../assets/img/icons/arrow-left.png')}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 18, color: '#125873', fontFamily: 'Inter'}}>
          Kembali
        </Text>
      </View>
    </View>
  );
};
