import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import AppNavigator from '../config/navigation';
import HomeScreen from "../screens/HomeScreen";

class index extends Component
{
    render()
    {
        return (
          <AppNavigator/>
        );
    }
}




export default index;


// class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Home!</Text>
//             </View>
//         );
//     }
// }
//
// class SettingsScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>SettingsScreen!</Text>
//             </View>
//         );
//     }
// }
//
// const TabNavigator = createBottomTabNavigator({
//     Home: HomeScreen,
//     SettingsScreen: SettingsScreen,
// });
//
// export default createAppContainer(TabNavigator);