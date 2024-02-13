const express = require('express');
const router = express.Router()
const {getItems, setItem, updateItem, deleteItem} = require('../controllers/itemControllers')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getItems).post(protect, setItem)
router.route('/:id').delete(protect, deleteItem).put(protect, updateItem)

module.exports = router

// router.get('/', getItems)
// router.post('/', setItem)
// router.put('/:id', updateItem)
// router.delete('/:id', deleteItem)