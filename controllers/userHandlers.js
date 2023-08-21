const user = require('../models/userSchema');

async function handleGetAllUsers(req, res) {
    const users = await user.find({});
    return res.status(200).json({status: 'success', data: users});
}

async function handleGetUserById(req, res) {
    const users = await user.findById(req.params.id);
    if(!user) return res.status(404).json({status: 'fail', message: 'User not found'});
    return res.json(users);
}

async function handleUpdateUserById(req, res) {
    await user.findByIdAndUpdate(req.params.id, req.body);
    if(!user) return res.status(404).json({status: 'fail', message: 'User not found'});
    return res.json({ 'status': 'patched' });
}

async function handleDeleteUserById(req, res) {
    await user.findByIdAndDelete(req.params.id, req.body);
    if(!user) return res.status(404).json({status: 'fail', message: 'User not found'});
    return res.json({ 'status': 'Deleted' });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    console.log(body);
    if (
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res.status(400).json({ msg: "Bad Request" });
    }
    const result = await user.create({
      first_name : body.first_name,
      last_name : body.last_name,
      email : body.email,
      gender : body.gender,
      job_title : body.job_title
    })
    console.log(result);
    return res.status(201).json({msg : 'Success', id : result._id});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}