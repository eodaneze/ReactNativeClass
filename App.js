import React from 'react';
import {View, StyleSheet} from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather';
import UpComingWeather from './src/screens/UpComingWeather';
import City from './src/screens/City';
const App = () => {
  return(
     <View style={Styles.container}>
            <City />
     </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App