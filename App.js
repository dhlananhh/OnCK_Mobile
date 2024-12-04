import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';


export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
