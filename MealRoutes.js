const { Router } = require('express');
const { getMeal, saveMeal, deleteMeal, editMeal } = require('./MealController')

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeal);
router.post('/deleteMeal', deleteMeal);
router.post('/editMeal', editMeal)

module.exports = router;