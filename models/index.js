const Users = require("./User");
const UserLeaves = require("./UserLeave");


Users.hasMany(UserLeaves, {
    foreignKey: { name: "userId", allowNull: false, as: "userLeaves" },
    onDelete: "CASCADE",
  });

  UserLeaves.belongsTo(Users, {
    foreignKey: "userId",
    as: "user",
  });

  const models = {};


  models.Users = Users;
  models.UserLeaves = UserLeaves

  module.exports = models;


