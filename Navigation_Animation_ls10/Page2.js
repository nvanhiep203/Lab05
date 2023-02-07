import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Page2 = ({ navigation, route }) => {
  return (
    <View style={{flex:1,}}>
      <Text style={{flex:1,backgroundColor:'red',fontSize:30}}>This is {route.params.name}'s profile</Text>
      <Text style={{flex:1,backgroundColor:'lightblue',fontSize:30}}>This is his number:  {route.params.number}</Text>
    </View>
  )
}

export default Page2

const styles = StyleSheet.create({})
