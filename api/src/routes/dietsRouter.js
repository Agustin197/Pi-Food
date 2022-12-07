const { Router } = require("express");
const { getAllDiets } = require("../controllers/dietsC");
const router = Router();

router.get('/', async (req, res, next) => {
    const { name } = req.query
    try {
        const totalDiets = await getAllDiets()
        console.log(totalDiets)
    if (name) {
      let dietName = await totalDiets.filter((d) => d.name.toLowerCase().includes(name.toLocaleLowerCase()))
      dietName.length ? res.status(200).send(dietName) : res.status(404).send('Diet not found')
    } else {
      res.status(200).send(totalDiets)
    }
    } catch (error) {
        next(error)
    }
})

module.exports = router