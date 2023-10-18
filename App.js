import React from 'react';
import {View, StyleSheet} from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather';
import UpComingWeather from './src/screens/UpComingWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'
const Tab = createBottomTabNavigator()
const App = () => {

  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray'
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
    </NavigationContainer>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App