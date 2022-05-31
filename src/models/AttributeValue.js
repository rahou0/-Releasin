const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const AttributeValue= sequelize.define(
  "AttributeValue",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(),
    },
    boolean:{
        type: DataTypes.BOOLEAN(),
    },
    date:{type: DataTypes.DATE()},
  },

);
module.exports = AttributeValue;
