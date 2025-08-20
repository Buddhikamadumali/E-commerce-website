const Cart = require("../models/Cart");
const Product = require("../models/Product");

//Add items to the cart
exports.addToCart = async (req,res ) => {
    try{
        const { product, quantity} = req.body;

        const existingProduct = await Product.findById(product);
        if(!existingProduct){
            return res.status(404).json({message:"Product not found"});
        }

        let cart = await Cart.findOne({user: req.user._id});

        if(!cart){
            cart = new Cart({user: req.user._id, products: []});
        }

        //check if product already exist in the cart
        const productIndex = cart.items.findIndex(
            (p) => p.product.toString() === product
        );

        if(productIndex > -1){
            cart.items[productIndex].quantity += quantity;
        }else {
            cart.items.push({ product: product,quantity});
        }

        await cart.save();
        res.json(cart);

    }catch(error){
        res.status(500).json({message: error.message});
    }
};

//Get the cart for a user
exports.getCart = async (req,res) => {
    try {
        const cart = await Cart.findOne({user: req.user._id}).populate("items.product");
        res.json(cart);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

//Remove product from cart
exports.removeFromCart = async(req, res) =>{
    try{
        const{ product} = req.body;
        let cart = await Cart.findOne({user: req.user._id});

        if(!cart) return res.status(404).json({message: "Cart not found"});

        cart.items = cart.items.filter(p => p.product.toString() !== product);

        await cart.save();
        res.status(200).json(cart);
    }catch(error){
        res.status(500).json({error: error.message});
        
    }
};