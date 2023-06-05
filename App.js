/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';

import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import SplashScreen from './pages/SplashScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import NakesScreen from './pages/NakesScreen';
import PanduanKlaim from './pages/pagesdetail/PanduanKlaim';
import PasienScreen from './pages/PasienScreen';

const Tab = createBottomTabNavigator();
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const COLORS = {
  primary: '#00AAFF',
  white: '#FFFFFF',
  orange: '#FFBC14',
  abuabu: '#9098B1',
  abusoft: '#EBF0FF',
  black: '#151515',
  black_soft: '#202020',
  green: '#3AF891',
  grey_soft: '#C9C9C9',
  black_transparent: '#292E32',
  font_color: '#E3E3E3',
  grey_1: '#878787',
  transparent: '#4A46464C',
};

function BackNakes() {
  const navigation = useNavigation();
  const handleBackButton = () => {
    navigation.goBack(); // Go back to the previous screen
    // You can also use navigation.navigate('ScreenName') to navigate to a specific screen
  };
  return (
    <TouchableOpacity
      // onPress={handleBackButton}
      onPress={() => navigation.navigate('NakesScreen')}
      style={{
        marginLeft: 24,
        backgroundColor: '#E8EFF1',
        padding: 8,
        borderRadius: 40,
        opacity: 0.7,
        marginVertical: 2,
      }}>
      <Image
        style={{height: 24, width: 24}}
        source={require('./assets/img/icons/arrow-left.png')}
      />
    </TouchableOpacity>
  );
}

function BackHome() {
  const navigation = useNavigation();
  const handleBackButton = () => {
    navigation.goBack(); // Go back to the previous screen
    // You can also use navigation.navigate('ScreenName') to navigate to a specific screen
  };
  return (
    <TouchableOpacity
      // onPress={handleBackButton}
      onPress={() => navigation.navigate('WelcomeScreen')}
      style={{
        marginLeft: 24,
        backgroundColor: '#E8EFF1',
        padding: 8,
        borderRadius: 40,
        opacity: 0.7,
        marginVertical: 2,
      }}>
      <Image
        style={{height: 24, width: 24}}
        source={require('./assets/img/icons/arrow-left.png')}
      />
    </TouchableOpacity>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerTitleStyle: {
            fontSize: 20,
            // fontFamily: 'Lato-Bold',
            color: '#125873',
          },
          headerStyle: {
            backgroundColor: COLORS.black_soft,
            elevation: 0,
          },
          // headerTitleAlign: 'center',
          // tabBarHideOnKeyboard: true,
          // tabBarShowLabel: false,
          // tabBarStyle: {
          //   backgroundColor: COLORS.black_soft,
          //   // opacity: 0.1,
          //   // position: "absolute",
          //   // bottom: 15,
          //   // marginHorizontal: 20,
          //   elevation: 5,
          //   // borderRadius: 15,
          //   borderTopWidth: 0.2,
          //   borderTopColor: "#97A0B5",
          //   height: 60,

          //   // ...styles.shadow,
          // },
        }}>
        <Tab.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="NakesScreen"
          component={NakesScreen}
          options={{
            title: 'Nakes',
            headerShown: true,
            headerStyle: {
              height: 120,
            },
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
            headerLeft: () => <BackHome />,
          }}
        />
        <Tab.Screen
          name="PasienScreen"
          component={PasienScreen}
          options={{
            title: 'Pasien',
            headerShown: true,
            headerStyle: {
              height: 120,
            },
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
            headerLeft: () => <BackHome />,
          }}
        />
        <Tab.Screen
          name="PanduanKlaim"
          component={PanduanKlaim}
          options={{
            title: 'Panduan Klaim',
            headerShown: false,
            headerStyle: {
              backgroundColor: 'white',
            },
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
            headerLeft: () => <BackNakes />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  form_style: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 45,
    borderRadius: 5,
  },
  label: {
    color: 'white',
  },
});

export default App;
