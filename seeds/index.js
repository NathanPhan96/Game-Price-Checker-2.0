const sequelize = require("../config/index.js");
const seedUsers = require("./userData");
const seedGames = require("./gameData");
const seedPlatforms = require("./platformData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPlatforms();
  await seedGames();

  process.exit(0);
};

seedAll();
