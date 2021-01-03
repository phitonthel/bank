const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.home)
router.get('/customers', Controller.showCustomers)

router.get('/customers/register', Controller.registerCustomer)
router.post('/customers/register', Controller.registerCustomerPOST)

router.get('/customers/:idCustomer/editProfile', Controller.editCustomer)
router.post('/customers/:idCustomer/editProfile', Controller.editCustomerPOST)

router.get('/customers/:idCustomer/accounts', Controller.showCustomerAccount)
router.get('/customers/:idCustomer/addAccounts', Controller.addAccount)
router.post('/customers/:idCustomer/addAccounts', Controller.addAccountPOST)

router.get('/customers/:idCustomer/accounts/:idAccount/transfer', Controller.transfer)
router.post('/customers/:idCustomer/accounts/:idAccount/transfer', Controller.transferPOST)




module.exports = router 