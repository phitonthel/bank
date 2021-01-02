const {Customer, Account} = require('../models/index')

class Controller {
  static home(req, res) {
    res.render('homepage', {})
  }

  static showCustomers(req, res) {
    Customer.findAll({
      order: [['fullName', 'ASC']]
    })
    .then((data) => {
      res.render('showCustomers', {data})
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static registerCustomer(req, res) {

  }

  static editCustomer(req, res) {

  }

  static showCustomerAccount(req, res) {

  }

  static transfer(req, res) {

  }
}

module.exports = Controller