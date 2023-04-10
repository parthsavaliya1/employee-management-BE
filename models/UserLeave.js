"use strict";
const { DataTypes } = require("sequelize");
const sequlize = require("../config/database.config");
const Users = require("./User");

const UserLeaves = sequlize.define(
  "leaves",
  {
    leaveId: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    leaveType: {
        type: DataTypes.ENUM("SICK_LEAVE", "CASUAL_LEAVE"),
       
        validate: {
          isIn: {
            args: [["SICK_LEAVE", "CASUAL_LEAVE"]],
            msg: "Please provide valid leave type.",
          },
        },
      },
    reason: { allowNull: false, type: DataTypes.STRING },
    startDate: { allowNull: false, type: DataTypes.DATE },
    endDate: { allowNull: false, type: DataTypes.DATE },
  },
  { underscored: true }
);

Users.hasMany(UserLeaves, {
    foreignKey: { name: "userId", allowNull: false, as: "userLeaves" },
    onDelete: "CASCADE",
  });

//   ApplicationEntities.belongsTo(Users, {
//     foreignKey: "userId",
//     as: "user",
//   });

module.exports = UserLeaves;
