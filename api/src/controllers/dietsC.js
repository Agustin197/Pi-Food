require('dotenv').config()
const axios = require ("axios")
const { API_KEY1,API_KEY2,API_KEY3,API_KEY4,API_KEY5 } = process.env;
const { Recipe, Diet } = require("../db")

const URL = 'https://api.spoonacular.com/recipes/complexSearch'

const getAllDiets = async () => {
    const totalDiets = await Diet.findAll()
    if (!totalDiets.length) {
        const apiUrl = await axios.get(`${URL}?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`)
        const apiDiets = apiUrl.data.results?.map(e => e.diets)

        const allDiets = apiDiets.flat().concat("vegetarian", "ketogenic")
        const filterDiets = [...new Set(allDiets)]
        //console.log(filterDiets)
        
        for (const elem in filterDiets) {
            Diet.findOrCreate({
                where: {name: filterDiets[elem]},
            })
        }
    } else {
        return totalDiets
    }
    
}

module.exports = {getAllDiets}

////