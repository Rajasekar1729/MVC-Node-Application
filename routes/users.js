var express = require('express');
var router = express.Router();
var user = require("../controllers/UserController.js");

// Get all users
router.get('/', function(req, res) {
  user.list(req, res);
});

// Get single user by id
router.get('/show/:id', function(req, res) {
  user.show(req, res);
});

// Create user
router.get('/create', function(req, res) {
  user.create(req, res);
});

// Save user
router.post('/save', function(req, res) {
  user.save(req, res);
});

// Edit user
router.get('/edit/:id', function(req, res) {
  user.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  user.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  user.delete(req, res);
});

module.exports = router;