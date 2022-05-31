const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Attribute = sequelize.define(
  "Attribute",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: { notEmpty: true },
    },
    type:{
        type: DataTypes.ENUM("text", "boolean","date","select","multiselect"),
          allowNull: false,
      validate: { notEmpty: true },
    }
  },

);
module.exports = Attribute;
