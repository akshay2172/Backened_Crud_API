const express = require("express");
const Product = require('../models/product.model.js')
const app = express()

const getproduct = async (req, res, next) => {
  try {
    const max = await Product.findById(req.params.id); 

    if (!max) {
      return res.status(404).json("product not found")
    }
    res.status(200).json(max);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



const getallproducts = async (req, res) => {
  try {
    const products = await Product.find({}); 
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error.message);
  }
};



const putproduct = async (req, res, next) => {
  try {
    const max = await Product.findById(req.params.id);
  
    max.quantity = req.body.quantity;
    max.price = req.body.price;

    if (!max) {
      return res.status(404).json("product not found");
    }
    res.status(200).json(max);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



const postproduct = async (req, res , next) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  


const deleteproduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    const products = await Product.find({});

    if (!product) {
      return res.status(404).json("Product not found");
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getproduct,
  getallproducts,
  putproduct,
  postproduct,
  deleteproduct,
};
