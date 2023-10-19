import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Counter from './src/demo/Counter';
// const Tab = createBottomTabNavigator()
const App = () => {

  return(
    <NavigationContainer>
       <Counter />
    </NavigationContainer>
  )
}

export default App