const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const { getCurrentTimeInTimestamp } = require("../utils/getCurrentTimeInTimestamp");

const ProductType = sequelize.define(
  "ProductType",
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
    created_at: { type: DataTypes.INTEGER(10) },
    updated_at: { type: DataTypes.INTEGER(10) },
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate(product_type) {
        product_type.created_at = getCurrentTimeInTimestamp();
        product_type.updated_at = getCurrentTimeInTimestamp();
      },
      beforeSave(product_type) {
        product_type.updated_at = getCurrentTimeInTimestamp();
      },
    },
  }
);
module.exports = ProductType;
