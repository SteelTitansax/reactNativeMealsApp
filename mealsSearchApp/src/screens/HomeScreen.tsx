import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image  style={styles.image1} source={{uri:"https://raw.githubusercontent.com/SteelTitansax/reactNativeMealsApp/refs/heads/main/logo.png"}} />

      <Text style={styles.title1}>Wellcome to</Text>
      <Text style={styles.title2}>The Recipes App</Text>
      <Text onPress = {() => navigation.navigate("SearchScreen")} style={styles.title3}>Press here for start</Text>
      <Image style={styles.image2} source={{uri:"https://raw.githubusercontent.com/SteelTitansax/assets/refs/heads/main/logo.png"}} />

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize:24,
    color: '#B00020'
  },
  title2: {
    fontSize:30,
    color: '#000000',
    fontWeight: "bold"
  },
  title3: {
    
    fontSize:14,
    color: '#000000'
  },
  title4: {
    
    fontSize:10,
    color: '#000000'
  },
  image1: {
    height:"20%",
    width: "40%"
  },
  image2: {
    marginTop:10,
    height:30,
    width: 25
  }
});