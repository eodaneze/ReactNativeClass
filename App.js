import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const App = () => {
  const[loading, setLoading] = useState(true);
  // const [location, setLocation] = useState(null);
  const [error, setError] = useState(null)
  const[weather, setWeather] = useState([]);
  const[lat, setLat] = useState([])
  const[lon, setLon] = useState([])

  const fetchWeatherData = async() => {

    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setError('Could not fetch weather');
    } finally{
      setLoading(false);
       
    }
     
  }
  
  useEffect(() => {
     (async() => {
       let {status} = await Location.requestForegroundPermissionsAsync()
       if(status !== 'granted'){
          setError('permission to access location was denied')
          return
       }
       let location = await Location.getCurrentPositionAsync({})
       setLat(location.coords.latitude)
       setLon(location.coords.longitude)
       await fetchWeatherData()
     })()
  }, [lat, lon])
  if(weather){
    console.log(weather);
  }
  if (loading){
    return (
      <View style={styles.container}>
          <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    )
   }
  return(
    <NavigationContainer>
       <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
   container:{
    justifyContent: 'center',
    flex: 1
   }
})

export default App