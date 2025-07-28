import axios from 'axios'
 
const endpointUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
export const getMealInfo = async (mealName : string) => {
    try{
        const fullUrl = endpointUrl + mealName;
        const response = await axios.get(fullUrl)
        const mealInfoData = response?.data?.meals;
        return mealInfoData
    }
    catch (error) {
      console.log("An error ocurred", error)
      return undefined;
    }
    
  }