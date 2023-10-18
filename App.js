import React from 'react';
import {View, StyleSheet} from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather';
import UpComingWeather from './src/screens/UpComingWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
const App = () => {

  return(
    <NavigationContainer>
      <Tab.Navigator>
         <Tab.Screen name={'Current'} component={CurrentWeather}/>
         <Tab.Screen name={'Upcoming'} component={UpComingWeather}/>
         <Tab.Screen name={'City'} component={City}/>
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