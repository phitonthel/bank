const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.home)
router.get('/customers', Controller.showCustomers)
router.get('/customers/register', Controller.registerCustomer)
router.get('/customers/:idCustomer/editProfile', Controller.editCustomer)
router.get('/customers/:idCustomer/accounts', Controller.showCustomerAccount)
router.get('/customers/:idCustomer/accounts/:idAccount/transfer', Controller.transfer)


module.exports = router 