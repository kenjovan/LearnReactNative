import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View, ScrollView } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from "./Login"
import Register from './Register';
import Dashboard from './Dashboard';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function DashboardTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Dashboard}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="AdoptHistory"
        component={Dashboard}
        options={{
          tabBarLabel: 'Adopt History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="restore" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Dashboard}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register', headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardTab} options={{ title: 'Dashboard' }} />
      </Stack.Navigator>
    </NavigationContainer>


  );
};

export default App;
