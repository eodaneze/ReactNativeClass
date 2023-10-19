import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
// const Tab = createBottomTabNavigator()
const App = () => {

  return(
    <NavigationContainer>
       <Tabs />
    </NavigationContainer>
  )
}

export default App