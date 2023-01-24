const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "test",
    password: "test",
    email: "test@test.com",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
