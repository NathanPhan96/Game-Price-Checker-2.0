const sequelize = require("../config/index.js");
const seedUsers = require("./userData");
const seedGames = require("./gameData");
const seedPlatforms = require("./platformData");
const seedPrice = require("./historyData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPlatforms();
  await seedGames();
  await seedPrice();

  process.exit(0);
};

seedAll();
