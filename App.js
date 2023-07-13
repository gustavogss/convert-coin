import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Home } from './src/pages/Home';

export default function Conversor () {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
     <Home />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});