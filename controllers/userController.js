import { User } from "../models/userModel.js";

// get all users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ data: users });
};

// create new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({ user: user });
};
// update user
const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ user });
};

// delete user
const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ user });
};

export { getUsers, createUser, updateUser, deleteUser };
