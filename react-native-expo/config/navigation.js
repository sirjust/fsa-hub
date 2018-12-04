import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

// Screens
import HomeScreen from '../screens/HomeScreen'
import ChatScreen from '../screens/ChatScreen'
import KnowledgeScreen from '../screens/KnowledgeScreen'
import ProfileScreen from '../screens/ProfileScreen'


//Stack Navigators

const HomeStack = createStackNavigator({
    Home: {screen: HomeScreen}
})

const ChatStack = createStackNavigator({
    Chat: {screen: ChatScreen}
})

const KnowledgeStack = createStackNavigator({
    Knowledge: {screen: KnowledgeScreen}
})

const ProfileStack = createStackNavigator({
    Profile: {screen: ProfileScreen}
})


// Tab Bar Navigator
// const AppTabBarNavigator = createBottomTabNavigator({
//     Home: HomeScreen,
//     Chat: ChatScreen,
//     Knowledge: KnowledgeScreen,
//     Profile: ProfileScreen
// })

const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Chat: ChatScreen,
});

// This is the base of the app navigation
const AppNavigation = createStackNavigator({
    TabBarScreen: {
        screen: TabNavigator
    },

})

// export default createAppContainer(AppTabBarNavigator)



export default createAppContainer(AppNavigation);