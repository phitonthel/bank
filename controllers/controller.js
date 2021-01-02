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
    res.render('registerCustomers')
  }

  static registerCustomerPOST(req, res) {
    let input = req.body
    let obj = {}
    console.log(input);
    Customer.create(input)
    .then(() => {
      res.redirect('/customers')
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static editCustomer(req, res) {
    let id = +req.params.idCustomer
    Customer.findByPk(id)
    .then((data) => {
      // data.birthDate = data.birthDate.toString()
      let newDate = data.birthDate.toISOString().slice(0,10);
      data.dataValues.birthDate = newDate
      // console.log(data);
      res.render('editCustomers', {data})
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static editCustomerPOST(req, res) {
    let id = req.params.idCustomer
    let input = req.body
    // console.log(input);
    Customer.update(input, {where:{id:id}})
    .then((data) => {
      res.redirect('/customers')
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static showCustomerAccount(req, res) {

  }

  static transfer(req, res) {

  }
}

module.exports = Controller