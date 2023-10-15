import React from 'react'
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
const UpComingWeather = () => {
  return (
     <SafeAreaView style={styles.container}>
        <Text>Upcoming Weather</Text>
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
export default UpComingWeather