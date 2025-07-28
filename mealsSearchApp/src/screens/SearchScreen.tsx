import { StyleSheet, Text, View ,Image, TextInput, Pressable, Linking} from 'react-native'
import { Fragment, useState } from 'react'
import React from 'react'
import { getMealInfo } from '../api/http'

const SearchScreen = () => {

  const [mealInfo, setMealInfo] = useState<any>(null);
  const [recipeName, setRecipeName] = useState('');

  
  const updateMealInfoState = async (recipeName : string) => {
     const response = await getMealInfo(recipeName);
    setMealInfo(response);
  }
  
  return (
    <View style={styles.container}>
      {mealInfo === null && (
        <Image  style={styles.image1} source={{uri:"https://raw.githubusercontent.com/SteelTitansax/reactNativeMealsApp/refs/heads/main/logo.png"}} />
      )}  
      <TextInput keyboardType='default' placeholder='Recipe name' style = {styles.input1} value={recipeName} onChangeText={setRecipeName}/>
      <Pressable onPress={() => updateMealInfoState(recipeName)}>
        <Text style={{ color: 'blue', marginVertical: 10 }}>Get your recipe details pressing here</Text>
      </Pressable>      

        {Array.isArray(mealInfo) && mealInfo.length > 0 && (
            <Fragment>
                <Image  style={styles.image1} source={{uri:mealInfo[0]?.strMealThumb}} />
                <Text style={styles.title1}>  Recipe </Text>
                <Text style={styles.text1}>
                   {mealInfo[0]?.strMeal || 'Not found'}
                </Text>

                <Text style={styles.title1}> Country Recipe </Text>

                 <Text style={styles.text1}>
                    {mealInfo[0]?.strArea || 'Not found'}
                </Text>

                <Text style={styles.title1}> Instructions </Text>

                <Text style={styles.body1}>
                   {mealInfo[0]?.strInstructions || 'Not found'}
                </Text>

                {mealInfo[0]?.strYoutube && (
                <Pressable onPress={() => Linking.openURL(mealInfo[0].strYoutube)}>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline', marginTop: 10 }}>
                    Watch Video on YouTube
                    </Text>
                </Pressable>
                )}
                
            </Fragment>
            
        )}

        {mealInfo === null && (
            <Text style={{ marginTop: 20, fontStyle: 'italic' }}>
                No results yet.
            </Text>
        )}

        {mealInfo === undefined && (
            <Text style={{ marginTop: 20, color: 'red' }}>
                Error fetching data.
            </Text>
        )}

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image1: {
    height:"20%",
    width: "40%"
  },
  title1:
  { paddingTop: "3%"}
  ,
  input1: {
    marginBottom:"3%",
    height: "5%",
    width: "70%",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "grey"
  },
  text1 :{
    marginTop: 5, 
    fontSize: 10,
    paddingLeft: "15%",
    paddingRight: "15%",
    textAlign: "left"
  },
  body1: {
  marginTop: 5,
  fontSize: 10,
  paddingLeft: "15%",
  paddingRight: "15%",
  textAlign: "justify" 
}
});