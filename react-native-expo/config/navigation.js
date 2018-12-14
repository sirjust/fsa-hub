import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';


import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import KnowledgeScreen from '../screens/KnowledgeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const AuthStackNavigator = createStackNavigator({
    Welcome: { screen: WelcomeScreen },
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
});

const AppTabNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLable: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-home" size={28} color={tintColor} />
          ),
        },
      },
      // Chat: {
      //   screen: ChatScreen,
      //   navigationOptions: {
      //     tabBarIcon: ({ tintColor }) => (
      //       <Entypo name="chat" size={28} color={tintColor} />
      //     ),
      //   },
      // },
      Knowledge: {
        screen: KnowledgeScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name="book" size={28} color={tintColor} />
          ),
        },
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Entypo name="user" size={28} color={tintColor} />
          ),
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#6200EE',
        inactiveTintColor: '#D9D9D9',
      },
    },
  );

const AppStackNavigator = createStackNavigator({
    AppTabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title: '#thehub',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Ionicons name="md-menu" size={32} />
                    </View>
                </TouchableOpacity>
            ),
        }),
    },
});

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator,
    Settings: { screen: SettingsScreen },
});

const AppNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default createAppContainer(AppNavigator);