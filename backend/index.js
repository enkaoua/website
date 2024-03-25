import express from "express";
import bodyParser from "body-parser";
import mongoose, { get } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import categoriesRoutes from "./routes/categories.js";
import categoryRoutes from "./routes/category.js";
import productsRoutes from "./routes/products.js";
import productRoutes from "./routes/product.js";
import shopRoutes from "./routes/shop.js";
import shopsRoutes from "./routes/shops.js";
import User from "./models/user.js";
import Shop from "./models/shop.js";
import Category from "./models/category.js";
import Product from "./models/product.js";

const app = express();

// =================== initial settings ===================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// for using process and environment variables
dotenv.config();

// defining port
//console.log(process.env)
const port = process.env.port || 3030;

// ==================== DATABASE CONNECTION =====================

// temp stuff to suppress internal warning of mongoose which would be updated by them soon
//mongoose.set('useCreateIndex', true);

// connecting to mongo and checking if DB is running
async function connecting() {
  try {
    //'mongodb://127.0.0.1/test_mongodb'
    await mongoose.connect(process.env.MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Connected to the DB");
  } catch (error) {
    console.log(error);
  }
}

connecting();

// ================= ROUTES ===================
app.use("/api/categories", categoriesRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/product", productRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/shops", shopsRoutes);

// =================== SERVER START ===================
//process.env.PORT will be used when we deploy...
app.listen(port, () => {
  console.log("***server running on port***", port);
});

//run_query()
//getProds();
// =================== TESTING ===================
async function getProds() {
  try {
    const products = await Product.find({
      shop_id: "65da4b2671b1f17edc689f2e",
      price: { $lt: 10 },
    }).populate("shop_id");
    console.log(products[0].shop_id);
  } catch (error) {
    console.log(error);
  }
}

async function run_query() {
  try {
    /* const res = await fetch(`http://localhost:3030/api/shop/65d2048e0c0b4d97b5ee2fac`);
    const data = await res.json(); */

    const shop = await Shop.findById("65d20916d1ee244de47f583c");
    const category = await Category.findById("65d20924d1ee244de47f583f");
    // create product in shop
    const product = new Product({
      name: "jjj",
      description: "hjhfhf",
      link: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67050454_50.jpg?ts=1697547783984&imwidth=466&imdensity=2&impolicy=featured",
      price: 12.0,
      category_id: "65d20924d1ee244de47f583f",
      image:
        "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67050454_50.jpg?ts=1697547783984&imwidth=466&imdensity=2&impolicy=featured",
      shop_id: "65d20916d1ee244de47f583c",
      stock: 1,
    });

    // create product
    const newProduct = await Product.create(product);
    // update category
    category.products_id.push(newProduct);
    console.log("----", newProduct);

    // update shop
    shop.products_id.push(newProduct);

    await category.save();
    await shop.save();
    await newProduct.save();

    console.log(shop);
  } catch (error) {
    console.log(error);
  }
}

//(/api)

// (/authentication) authentication
//   POST (/signup) signup
//   POST (/signup) login
//   POST (/logout) logout

// (/categories)
//   GET (/) gets all categories
//   POST (/create) create category

// (/categories/:id)
//   GET (/) get category by id
//   DELETE (/) delete category
//   POST (/) edit category

// (/products)
//    GET (/?page=page_num) get all products
//    GET (/?category=:id) get products of category
//    GET (/?colours=[]) get products by colours
//    GET (/?price_range=low,high) get products by price range
// categoryNames[]=book store&categoryNames[]=red

// (/product)
//    GET (/:id) get product by id
//    POST (/create) create product
//    DELETE (/:id) delete
//    POST (/:id) edit

// (/shop) ---- temporary
//   GET (/:id) get shop by id
//   POST (/create) create shop
//   DELETE (/:id) delete shop
//   POST (/:id) edit shop

// (/users)
//    GET (/?page=page_num) get all users

// (/user)
//    GET (/:id) get user
//    POST (/:id) edit user (name, email, password)
//    DELETE (/delete) delete user

// (/orders)
//    POST (/pay) payment (BODY- jwt)
//    GET (/:user_id) get user order history

//app.use("/authentication");
