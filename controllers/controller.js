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
      let newDate = data.birthDate.toISOString().slice(0,10);
      data.dataValues.birthDate = newDate
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
    let id = req.params.idCustomer
    Customer.findByPk(id, {
      include: Account,
      where:{CustomerId:id}
    })
    .then((data) => {
      res.render('showCustomerAccount', {data})
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static addAccount(req, res) {
    let id = req.params.idCustomer
    Customer.findByPk(id)
    .then((data) => {
      res.render('addAccountToCustomer', {data})
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static addAccountPOST(req, res) {
    let id = req.params.idCustomer
    let input = req.body
    
    //add reference
    input.CustomerId = id

    Account.create(input)
    .then(() => {
      res.redirect(`/customers/${id}/accounts`)
    })
    .catch((err) => {
      res.send(err)
    })
  }

  static transfer(req, res) {
    let idCustomer = req.params.idCustomer
    let idAccount = req.params.idAccount
    let dataAccount, dataCustomer

    Account.findAll()
    .then((data) => {
      dataAccount = data
      return Customer.findByPk(idCustomer)
    })
    .then((data) => {
      dataCustomer = data
      res.send(dataAccount)
    })
    .catch((err) => {
      res.send(err)
    })
  }
}

module.exports = Controller