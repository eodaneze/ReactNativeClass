import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>

      <View style={styles.container}>
        <Feather name="sun" size={108} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <RowText messageOne={'High: 8'} messageTwo={'Low: 6'} containerStyles={styles.highLowWrapper} messageOneStyles={styles.highLow} messageTwoStyles={styles.highLow} />

      </View>
      <RowText messageOne={'Its sunny'} messageTwo={'Its perfect t-shirt weather'} containerStyles={styles.bodyWrapper} messageOneStyles={styles.description} messageTwoStyles={styles.message} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 40,
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather