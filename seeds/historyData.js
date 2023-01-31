const { history_price } = require("../models");

const priceData = [{

    game_id: 1,
    price: 59.99,
    user_id: 1,
}, {
    game_id: 2,
    price: 59.99,
    user_id: 1,
}, {
    game_id: 3,
    price: 59.99,
    user_id: 1,
}, {
    game_id: 4,
    price: 59.99,
    user_id: 1,
}, {
    game_id: 1,
    price: 59.99,
    user_id: 1,
}, {
    game_id: 2,
    price: 59.99,
    user_id: 1,
}];

const seedPrice = () => history_price.bulkCreate(priceData);

module.exports = seedPrice;
