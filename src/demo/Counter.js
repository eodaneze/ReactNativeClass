import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
const Counter = () => {
    let count = 0
  return (
    <View style={styles.container}>
         <Text style={styles.title}>{`count : ${count}`}</Text>
         <Button 
            color={'red'} 
            title={'increase the count'} 
            onPress = {() => {
              count++
              console.log(count);
            }}
         />
         <Button 
           color={'green'}
           title={'decrease the count'}
           onPress = {() => {
             count--
             console.log(count);
           }}
         />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'orange'
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25
  }
})

export default Counter