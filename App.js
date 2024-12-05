import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  View, 
  StyleSheet,
} from 'react-native';
import ProductScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <View>
      <ProductScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
