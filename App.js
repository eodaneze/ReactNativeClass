import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{height: 100, width: 100, backgroundColor: 'orange'}}>
       <Text>Hello from react native</Text>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
