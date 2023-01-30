//use the input of the user to search the database for the game
//if the game is found, return the game object
//if the game is not found, return false
const { Game } = require("../models");




const searchGame = async (gameName) => {
  const game = await Game.findOne({
    where: {
      name: gameName,
    },
    });
    if (game) {
        return game;
        } else {
            return false;
        }
    };


module.exports = searchGame;
