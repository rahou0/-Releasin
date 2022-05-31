const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const AssignedAttribute= sequelize.define(
  "AssignedAttribute",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },

);
module.exports = AssignedAttribute;
