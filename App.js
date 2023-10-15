import React from 'react'
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'

const App = () => {
  return(
    <SafeAreaView>

    <View style={styles.container}>
      <Text>Current weather</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'pink'
  }
})
export default App