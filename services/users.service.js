const {UserLeaves, Users} = require("../models/index");

exports.findAllUsers = async () => await Users.findAll({
  include: [
    {
      model: UserLeaves,
    },
  ],
});

exports.createUser = async (user) => await Users.create(user);

exports.updateUser = async (user, userId) =>
  await Users.update(user, {
    where: {
       userId,
    },
  });

exports.deleteUser = async (userId) =>
  await Users.destroy({
    where: {
       userId,
    },
  });