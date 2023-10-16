import React from 'react';
import {View, StyleSheet} from 'react-native'
import CurrentWeather from './src/components/CurrentWeather';
import UpComingWeather from './src/components/UpComingWeather';
import OurChild from './src/components/OurChild';
const App = () => {
  return(
     <View style={Styles.container}>
            <OurChild message={"Hello"}/>
            <OurChild message={"I am Daniel"}/>
            <OurChild message={"I am Code"}/>
     </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App