const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const AttributeValue = require("./AttributeValue");

const AssignedAttribute = sequelize.define("AssignedAttribute", {
  id: {
    type: DataTypes.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

AssignedAttribute.hasOne(AttributeValue, {
  foreignKey: "AttributeValue",
});
AttributeValue.belongsTo(AssignedAttribute, {
  foreignKey: "AttributeValue",
});

module.exports = AssignedAttribute;
