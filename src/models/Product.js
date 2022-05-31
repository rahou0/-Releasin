const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const {
  getCurrentTimeInTimestamp,
} = require("../utils/getCurrentTimeInTimestamp");

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
      validate: { notEmpty: true },
    },
    created_at: { type: DataTypes.INTEGER(10) },
    updated_at: { type: DataTypes.INTEGER(10) },
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate(product) {
        product.created_at = getCurrentTimeInTimestamp();
        product.updated_at = getCurrentTimeInTimestamp();
      },
      beforeSave(product) {
        product.updated_at = getCurrentTimeInTimestamp();
      },
    },
  }
);
Product.hasMany(AssignedAttribute, {
  foreignKey: "AssignedAttributes",
});
AssignedAttribute.belongsTo(Product, {
  foreignKey: "AssignedAttributes",
});
Product.hasOne(ProductType, {
  foreignKey: "ProductType",
});
ProductType.belongsTo(Product, {
  foreignKey: "ProductType",
});
module.exports = Product;
