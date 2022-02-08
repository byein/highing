/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/home';
import LoginScreen from './src/login';
import TabUserScreen from './src/tab_user';
import TabSettingScreen from './src/tab_setting';
import BoardScreen from './src/board';
import Fonts from './src/font';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#F2F2F2',
        },
        tabBarLabel: '',
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
        // tabBarLabelPosition: 'beside-icon',
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
      })}>
      <Tab.Screen name="Setting" component={TabSettingScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="User" component={TabUserScreen} />
    </Tab.Navigator>
  );
};
const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName, iconSize;

  if (name == 'Setting') {
    iconImagePath = require('./src/assets/pics/setting_icon.png');
  } else if (name == 'Home') {
    iconName = 'people-outline';
    iconImagePath = require('./src/assets/pics/home_icon.png');
  } else if (name == 'User') {
    iconName = 'mail-outline';
    iconImagePath = require('./src/assets/pics/user_icon.png');
  }
  iconSize = 40;
  return (
    <Image
      style={{
        width: 40,
        height: 40,
      }}
      source={iconImagePath}
    />
  );
};
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#F2F2F2',
            },
            title: '',
          }}>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              title: '',
              headerLeft: () => (
                <Button
                  title="나무로"
                  color="black"
                  fontWeight="bold"
                  // fontFamily={Fonts.LOTTEMART}
                />
              ),
              headerRight: () => (
                <Button
                  title="Highing"
                  color="black"
                  fontWeight="bold"
                  // fontFamily={Fonts.LOTTEMART}
                />
              ),
            }}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Board"
            component={BoardScreen}
            options={{
              title: '',
              headerLeft: () => (
                <Button
                  title="나무로"
                  color="black"
                  fontWeight="bold"
                  // fontFamily={Fonts.LOTTEMART}
                />
              ),
              headerRight: () => (
                <Button
                  title="Highing"
                  color="black"
                  fontWeight="bold"
                  // fontFamily={Fonts.LOTTEMART}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
