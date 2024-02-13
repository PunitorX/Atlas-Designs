const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Item = require('../models/itemModel')

// @desc  Get items
// @route  GET /api/items
// @access  Private
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({ user: req.user.id })

  res.status(200).json(items)
})

// @desc  Set items
// @route  POST /api/items
// @access  Private
const setItem = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const item = await Item.create({
    text: req.body.text,
    user: req.user.id
  })

  res.status(200).json(item)
})

// @desc  Update item
// @route  PUT /api/items/:id
// @access  Private
const updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id)

  if(!item) {
    res.status(400)
    throw new Error('Item not found')
  }

  const user = await User.findById(req.user.id)

  // * Check for user
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // ! Make sure the logged in user matches the item user
  if(item.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  res.status(200).json(updateItem)
})

// @desc  Delete item
// @route  DELETE /api/items
// @access  Private
const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id)

  if(!item) {
    res.status(400)
    throw new Error('Item not found')
  }

  const user = await User.findById(req.user.id)

  // * Check for user
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // ! Make sure the logged in user matches the item user
  if(item.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await item.deleteOne() // remove() DOES NOT WORK
  
  res.status(200).json({id: req.params.id})
})

module.exports = {
  getItems, setItem, updateItem, deleteItem
}