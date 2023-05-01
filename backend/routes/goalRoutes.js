const express = require('express');
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalControllers')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router

// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)