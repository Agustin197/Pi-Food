const { Router } = require("express");
const router = Router();

const {getAllRecipes, getRecipeId, createRecipe} = require("../controllers/recipesC")

router.get('/', async (req, res, next) => {
    const { title } = req.query
    try {
        const totalRecipes = await getAllRecipes()
        //console.log(totalRecipes);
        if (title) {
        let recipeName = totalRecipes.filter((d) => d.title.toLowerCase().includes(title.toLocaleLowerCase())) //
        recipeName.length ? res.status(200).send(recipeName) : res.status(404).send('Recipe not found')
        } else {
        res.status(200).send(totalRecipes)
        }
    } catch (error) {
       next(error)
    }
})

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const recipeId = await getRecipeId(id);
      if (recipeId) {
        res.status(200).send(recipeId);
      } else {
        res.status(404).send("Recipe not found");
      }
    } catch (error) {
      next(error);
    }
  });

router.post("/", createRecipe);


module.exports = router