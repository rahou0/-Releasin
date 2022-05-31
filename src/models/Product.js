const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const User = require("./User");
const { getDateInTimestamp } = require("../utils/getDateInTimestamp");

const Product = sequelize.define(
  "Product",
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
      unique: true,
      validate: { notEmpty: true },
    },
    phone_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      validate: { notEmpty: true },
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: 10,
    },
    address: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING(64), allowNull: false },
    region: { type: DataTypes.STRING(64), allowNull: false },
    postal_code: { type: DataTypes.INTEGER(10), allowNull: false },
    country: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "FRA",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    web_site: { type: DataTypes.STRING, allowNull: false },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        if (!this.getDataValue("logo")) return null;
        return "/images/association/logo/" + this.getDataValue("logo");
      },
    },
    company_number: { type: DataTypes.STRING(32), allowNull: false },
    created_at: { type: DataTypes.INTEGER(10) },
    updated_at: { type: DataTypes.INTEGER(10) },
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate(product) {
        product.created_at = getDateInTimestamp();
        product.updated_at = getDateInTimestamp();
      },
      beforeSave(product) {
        product.updated_at = getDateInTimestamp();
      },
    },
  }
);
module.exports = Product;
