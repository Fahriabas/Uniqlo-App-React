const express = require("express")
const Controller = require("../controllers/controller")
const authentication = require("../middlewares/authentication")
const UserController = require("../controllers/user-controller")
const Router = express.Router()

Router.get("/", Controller.home)
Router.post("/login", Controller.login)
Router.get("/products",authentication, Controller.productList)
Router.get("/detail/:idProduct", authentication, Controller.detailProduct)
Router.get("/categories",authentication, Controller.categoryList)
Router.get("/dashboard",authentication, Controller.dashboard)
Router.post("/product",authentication, Controller.addProduct)
Router.post("/category", authentication, Controller.createCategory)
Router.delete("/product/:id",authentication, Controller.deleteProduct)
Router.post("/adminRegister",authentication, Controller.adminRegister)
Router.delete("/categories/:id", authentication, Controller.deleteCategory)
Router.put("/product/:id", Controller.editProduct)




//publik
Router.post("/pub/login", UserController.login)
Router.get("/pub/products", UserController.productList)
Router.get("/pub/detail/:id", UserController.detail)

module.exports = Router