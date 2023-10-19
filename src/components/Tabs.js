import React from 'react';
import {View, StyleSheet} from 'react-native'
import CurrentWeather from '../screens/CurrentWeather';
import UpComingWeather from '../screens/UpComingWeather';
import City from '../screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
            backgroundColor: 'lightblue'
        },
        headerStyle: {
             backgroundColor: 'lightblue'
        },
        headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato',
            textAlign: 'center'
        }
     }}>
        <Tab.Screen name={'Current'} component={CurrentWeather} options={{
           tabBarIcon: ({focused}) => (<Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'}/>)
        }}/>
        <Tab.Screen name={'Upcoming'} component={UpComingWeather} options={{
           tabBarIcon: ({focused}) => (<Feather name={'clock'} size={25} color={focused ? 'tomato' : 'black'}/>)
        }}/>
        <Tab.Screen name={'City'} component={City} options={{
           tabBarIcon: ({focused}) => (<Feather name={'home'} size={25} color={focused ? 'tomato' : 'black'}/>)
        }}/>
      </Tab.Navigator>
  )
}

export default Tabs