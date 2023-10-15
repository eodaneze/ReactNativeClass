import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons'
const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  }
]

const Item = (props) => {
  const {dt_txt, min, max, condition} = props
  return(
   <View>
    <Feather name={'sun'} size={50} color={'white'}/>
      <Text>{dt_txt}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
   </View>
  )
}
const UpComingWeather = () => {
  const renderItem = ({item}) => (
       <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
  )
  return (
     <SafeAreaView style={styles.container}>
        <Text>Upcoming Weather</Text>
        <FlatList 
          data={DATA}
          renderItem={renderItem}
        />
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
export default UpComingWeather