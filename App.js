import React from 'react';
import {View, StyleSheet} from 'react-native'
import CurrentWeather from './src/components/CurrentWeather';
const App = () => {
  return(
     <View style={Styles.container}>
      <CurrentWeather />
     </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App