"use strict";
const { DataTypes } = require("sequelize");
const sequlize = require("../config/database.config");

const Users = sequlize.define(
  "users",
  {
    userId: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    firstName: { allowNull: false, type: DataTypes.STRING },
    lastName: { allowNull: false, type: DataTypes.STRING },
    email: { allowNull: false, type: DataTypes.STRING },
    phoneNumber: { allowNull: false, type: DataTypes.STRING },
    birthDate: { allowNull: false, type: DataTypes.DATE },
  },
  { underscored: true }
);

module.exports = Users;
