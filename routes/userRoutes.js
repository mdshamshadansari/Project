const express = require('express');
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser
} = require("../controllers/userHandlers");

//Creating route with commmon "/api/users"
router
    .route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);
  
//Merging get, patch and delete bcox they have same route "/api/users/:id" 
router
    .route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports = router;
     