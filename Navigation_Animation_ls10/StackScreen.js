import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Page1 from './Page1';
import Page2 from './Page2';

const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Page1'>
            <Stack.Screen name="Page1" component={Page1} />
            <Stack.Screen name="Page2" component={Page2 } />

            {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    );
}
export default class StackScreen extends Component {
    render() {
        return (
            <NavigationContainer>
                <MyStack></MyStack>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})