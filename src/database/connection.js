const { Sequelize } = require("sequelize");
const logger = require("../utils/logger");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_NAME,
  process.env.DATABASE_NAME,
  {
    logging: false,
    // logging: (msg) => logger.info(msg),
    host: process.env.DATABASE_HOST,

    dialect: process.env.DATABASE_DIALECT,

    port: process.env.DATABASE_PORT,
    dialectOptions: { decimalNumbers: true },
    define: { freezeTableName: true },
  }
);
const connect = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
};
connect();
module.exports = sequelize;
global.sequelize = sequelize;
