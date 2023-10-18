import React from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground, View, } from 'react-native';
import {Feather} from '@expo/vector-icons'
const City = () => {
    const {cityName, cityText, countryName} = styles
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={styles.imageLayout}>

             <Text style={[cityName, cityText]}>London</Text>
             <Text style={[countryName, cityText]}>Uk</Text>
             <View style={styles.populationWrapper}>
                 <Feather name={'user'} size={50} color={'red'}/>
                 <Text style={styles.populationText}>800</Text>
             </View>
             <View style={styles.riseSetWrapper}>
                 <Feather name={'sunset'} size={50} color={'white'}/>
                 <Text style={styles.riseSetText}>10:46:58am</Text>
                 <Feather name={'sunset'} size={50} color={'white'}/>
                 <Text style={styles.riseSetText}>17:28:15pm</Text>
             </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex: 1
    },
    cityName:{
        fontSize: 40,
    },
    countryName: {
      fontSize: 30,
    },
    cityText:{
        justifyContent:'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    },
    riseSetWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})
export default City;