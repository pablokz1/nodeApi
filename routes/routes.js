const express = require('express')
const user = require('../controller/UserController')
const produtos = require('../controller/ProdutosController')
const routes = express();

// routes.use('/', (req, res)=> res.status(200).json({retorno: "oi"}))
routes.use('/admin', (req,res)=> "admin")
routes.use('/user', user.get)
routes.use('/produtos', produtos.get)


module.exports = routes