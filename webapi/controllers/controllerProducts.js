const express = require('express')
const productSchema = require('../schemas/productSchema')
const controller = express.Router()

const ProductSchema = require('../schemas/productSchema')

// Unsecured routes
controller.route('/').get(async (req, res) => {
    const products = []
    const list = await productSchema.find()
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName,
                tag: product.tag
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

controller.route('/:tag').get(async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag })
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName,
                tag: product.tag
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

controller.route('/:tag/:take').get(async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag }).limit(req.params.take)
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName,
                tag: product.tag
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

controller.route('/product/details/:articleNumber').get(async (req, res) => {
    const product = await productSchema.findById(req.params.articleNumber)
    if(product) {
        res.status(200).json({
            articleNumber: product._id,
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            rating: product.rating,
            imageName: product.imageName,
            tag: product.tag
        })
    } else
        res.status(404).json()
})

// secured routes
controller.route('/:articleNumber').post(async (req, res) => {
    const {name, description, category, price, rating, imageName, tag} = req.body

    if (!name || !price)
        res.status(400).json({text: 'Name and price is required.'})

    const item_exist = await productSchema.findOne({name})
    if (item_exist)
        res.status(409).json({text: 'A product with the same name alredy exists.'})
    else {
        const product = await productSchema.create({
            name,
            description,
            category,
            price,
            rating,
            imageName,
            tag
        })
        if (product)
            res.status(201).json({text: `Product with article number ${product._id} was created succesfully.`})
        else
            res.status(400).json({text: 'Creat product was not succesful, something went wrong.'})
    }
})

controller.route('/:articleNumber').delete(async (req, res) => {
    if(!req.params.articleNumber)
        res.status(400).json('no article number was specified')
    else {
        const item = await productSchema.findById(req.params.articleNumber)
        if(item) {
            await productSchema.remove(item)
            res.status(200).json({text: `Product with article number ${req.params.articleNumber} was deleted successfully`})
        } else {
            res.status(404).json({text: `Product with article number ${req.params.articleNumber} was not found`})
        }
    }
})

//Update
controller.route('/:articleNumber').put(async (req, res) => {
    const {name, description, category, price, rating, imageName, tag} = req.body

    if (!name || !price)
    res.status(400).json({text: 'Name and price is required.'})

    const item_exist = await productSchema.findOne({name})
    if (item_exist)
        res.status(409).json({text: 'A product with the same name alredy exists.'})
    else {
        const product = await productSchema.updateOne({
            name,
            description,
            category,
            price,
            rating,
            imageName,
            tag
        })
        if (product)
            res.status(201).json({text: `Product was updated succesfully.`})
        else
            res.status(400).json({text: 'Product update was not succesful, something went wrong.'})
    }
})


module.exports = controller
