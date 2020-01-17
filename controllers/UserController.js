var mongoose = require("mongoose");
var User = require("../models/User");

var employeeController = {};

// Show list of users
employeeController.list = function(req, res) {
  User.find({}).exec(function (err, users) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      console.log("users", users)
      res.render("../views/users/users", {userList: users});
    }
  });
};

// Show employee by id
employeeController.show = function(req, res) {
  User.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/users/edit", {employee: employee});
    }
  });
};

// Create new employee
employeeController.create = function(req, res) {
  res.render("../views/users/create");
};

// Save new employee
employeeController.save = function(req, res) {
  var employee = new User(req.body);

  employee.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/users/create");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/users/edit/"+employee._id);
    }
  });
};

// Edit an employee
employeeController.edit = function(req, res) {
  User.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/users/edit", {employee: employee});
    }
  });
};

// Update an employee
employeeController.update = function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/users/edit", {employee: req.body});
    }
    res.redirect("/users/edit/"+employee._id);
  });
};

// Delete an employee
employeeController.delete = function(req, res) {
  User.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("User deleted!");
      res.redirect("/users");
    }
  });
};

module.exports = employeeController;
