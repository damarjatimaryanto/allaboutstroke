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
const NakesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
      <ScrollView style={styles.scroll_container}>
        <View style={styles.menu_style}>
          <View style={{width: '30%', height: '100%'}}>
            <Image
              style={{height: 100, width: 80}}
              source={require('../assets/img/icons/icon_nakes2.png')}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              // alignItems: 'center',
              // backgroundColor: 'yellow',
              width: '70%',
              height: '100%',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Inter-Bold',
                color: COLORS.primary,
                fontSize: 20,
              }}>
              Nakes
            </Text>
            <Text style={{fontFamily: 'Inter-Regular', color: COLORS.coklat}}>
              Edukasi penanganan pasien stroke bagi nakes
            </Text>
          </View>
        </View>

        {/* // !Tampilan Menu */}

        <View>
          <Text style={{fontFamily: 'Inter', color: COLORS.coklat}}>
            Pilih Materi Edukasi:
          </Text>
        </View>

        <View style={styles.menu_container}>
          {/* // Menu Box */}
          <TouchableOpacity
            style={styles.box_menu_container}
            onPress={() => navigation.navigate('Definisi')}>
            <Text style={styles.text_menu_style}>Definisi</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Faktor Risiko</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Patofisiologi</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Anamnesa</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Pemeriksaan Fisik</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Pemeriksaan Penunjang</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Terapi</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>CP</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Klaim INA CBG</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Gizi</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Fisioterapi</Text>
          </TouchableOpacity>

          {/* // Menu Box */}
          <TouchableOpacity style={styles.box_menu_container}>
            <Text style={styles.text_menu_style}>Perawat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NakesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F4FF',
    paddingTop: 10,
  },
  text_container: {
    marginBottom: 32,
    width: WIDTH,

    justifyContent: 'center',
    alignItems: 'center',
  },

  scroll_container: {
    // backgroundColor: 'grey',
    width: WIDTH,
    paddingHorizontal: responsiveScreenWidth(3),
    // height: responsiveScreenHeight(80),
  },
  menu_container: {
    width: responsiveScreenWidth(93),
    paddingVertical: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  menu_style: {
    backgroundColor: '#ffffff',
    width: responsiveScreenWidth(94),
    height: 100,
    borderRadius: 10,
    // marginTop: 10,
    marginBottom: 12,
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1.5,
  },
  box_menu_container: {
    backgroundColor: COLORS.white,
    width: responsiveScreenWidth(44),
    height: 80,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveScreenWidth(5),

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1.5,
  },
  text_menu_style: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: COLORS.black,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
});
