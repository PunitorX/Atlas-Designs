const express = require('express');
const router = express.Router()
const {getItems, setItem, updateItem, deleteItem} = require('../controllers/itemControllers')

router.route('/').get(getItems).post(setItem)
router.route('/:id').delete(deleteItem).put(updateItem)

module.exports = router

// router.get('/', getItems)
// router.post('/', setItem)
// router.put('/:id', updateItem)
// router.delete('/:id', deleteItem)