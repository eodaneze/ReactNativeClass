import React from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground, View, } from 'react-native';
import IconText from '../components/IconText';
const City = () => {
    const {container, cityName, cityText, countryName, rowLayout, populationWrapper, riseSetWrapper, riseSetText, imageLayout} = styles
    return(
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout}>

             <Text style={[cityName, cityText]}>London</Text>
             <Text style={[countryName, cityText]}>Uk</Text>
             <View style={[populationWrapper, rowLayout]}>
                 <IconText iconName={'user'} iconColor={'red'} bodyText={'800'} bodyTextStyles={styles.populationText}/>
             </View>
             <View style={[riseSetWrapper, rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'14:12:23am'} bodyTextStyles={riseSetText}/>
                <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:15:43pm'} bodyTextStyles={riseSetText}/>
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
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        // fontWeight: 'bold'
    },
    riseSetWrapper:{
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize: 20,
        color: 'white',
        // fontWeight: 'bold'
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default City;