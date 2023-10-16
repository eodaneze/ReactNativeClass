import React from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native';

const City = () => {
    const {cityName, cityText, countryName} = styles
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={styles.imageLayout}>

             <Text style={[cityName, cityText]}>London</Text>
             <Text style={[countryName, cityText]}>Uk</Text>
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
    }
})
export default City;