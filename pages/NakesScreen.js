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
const NakesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
      <ScrollView style={styles.scroll_container}>
        <TouchableOpacity
          style={styles.menu_style}
          onPress={() => navigation.navigate('PanduanKlaim')}>
          <View style={styles.menu_img_container}></View>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>Panduan Klaim INA-CBG</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu_style}>
          <View style={styles.menu_img_container}></View>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>Panduan Klaim INA-CBG</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu_style}>
          <View style={styles.menu_img_container}></View>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>Panduan Klaim INA-CBG</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu_style}>
          <View style={styles.menu_img_container}></View>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>Panduan Klaim INA-CBG</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu_style}>
          <View style={styles.menu_img_container}></View>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>Panduan Klaim INA-CBG</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu_style}>
          <View style={styles.menu_img_container}></View>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>Panduan Klaim INA-CBG</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu_style}>
          <View style={styles.menu_img_container}></View>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>Panduan Klaim INA-CBG</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu_style}>
          <View style={styles.menu_img_container}></View>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>Panduan Klaim INA-CBG</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu_style}>
          <View style={styles.menu_img_container}></View>
          <View style={styles.title_container}>
            <Text style={styles.title_style}>Panduan Klaim INA-CBG</Text>
          </View>
        </TouchableOpacity>
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
    backgroundColor: '#f8f8f8',
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
    paddingLeft: responsiveScreenWidth(5),
    // height: responsiveScreenHeight(80),
  },

  menu_style: {
    backgroundColor: '#ffffff',
    width: responsiveScreenWidth(90),
    height: 100,
    // borderRadius: 100,
    // marginTop: 10,
    marginBottom: 12,
    flexDirection: 'row',
  },
  menu_img_container: {
    backgroundColor: '#125873',
    width: responsiveScreenWidth(27),
    height: '100%',
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
  },
  title_container: {
    width: responsiveScreenWidth(63),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
  title_style: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
