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
  ScrollView,
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
import Kembali from '../Kembali';
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
export default Definisi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll_container}>
        <Kembali />

        <View style={styles.content_container}>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>DEFINISI</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>STROKE</Text>

            <Text style={styles.content_isi}>
              Kumpulan gejala defisit neurologis akibat gangguan fungsi otak
              secara akut baik fokal maupun global yang terjadi mendadak,
              disebabkan oleh berkurang atau hilangnya alirah darah pada
              parenkim otak, retina, atau medulla spinalis akibat dari
              penyumbatan pembuluh darah.
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.content_title}>STROKE NON HEMORAGIC (SNH)</Text>

            <Text style={styles.content_isi}>
              Kumpulan gejala defisit neurologis akibat gangguan fungsi otak
              secara akut baik fokal maupun global yang terjadi mendadak,
              disebabkan oleh berkurang atau hilangnya alirah darah pada
              parenkim otak, retina, atau medulla spinalis akibat dari
              penyumbatan pembuluh darah.
            </Text>
          </View>

          <Image
            style={styles.img1_style}
            source={require('./../../assets/img/foto/definisi1.png')}
          />

          <View style={styles.content}>
            <Text style={styles.content_title}>STROKE NON HEMORAGIC (SNH)</Text>

            <Text style={styles.content_isi}>
              Kumpulan gejala defisit neurologis akibat gangguan fungsi otak
              secara akut baik fokal maupun global yang terjadi mendadak,
              disebabkan oleh berkurang atau hilangnya alirah darah pada
              parenkim otak, retina, atau medulla spinalis akibat dari
              penyumbatan pembuluh darah.
            </Text>
          </View>

          <Image
            style={styles.img2_style}
            source={require('./../../assets/img/foto/definisi2.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  scroll_container: {
    width: responsiveScreenWidth(92),
    marginHorizontal: responsiveScreenWidth(4),
    backgroundColor: 'white',
  },
  title_container: {
    marginBottom: 20,
  },
  title_style: {
    color: COLORS.primary,
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  },
  content: {
    // backgroundColor: 'yellow',
    marginBottom: 20,
  },
  content_title: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: COLORS.coklat,
  },
  content_isi: {
    color: COLORS.coklat,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    textAlign: 'justify',
  },
  img1_style: {
    width: responsiveScreenWidth(92),
    height: 139,
    marginBottom: 10,
  },
  img2_style: {
    width: responsiveScreenWidth(92),
    height: 139,
    marginBottom: 20,
  },
});
