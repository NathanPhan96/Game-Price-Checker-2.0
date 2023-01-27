// index.js establishes relationships between the models,
//and also creates the foreign key constraights without explicitly setting them in the Models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Game = require("./Game");
const Platform = require("./Platform");
const history_price = require("./history_price");


//Posts will have a userId field connecting to user table's id column
//if a user gets deleted, all posts made by the user get deleted
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//Comments will have a postId field connecting to the post table's id column
//if a post is deleted, all comments on the post will be deleted as well
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

//Comments will also have a userId field connecting to the user table's id column
//If a user gets deleted, all their comments will be deleted as well
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// User.hasOne(Game, {
//   foreignKey: "user_id",
// });

Game.belongsTo(User, { foreignKey: "user_id" });

Platform.belongsTo(Game, { foreignKey: "game_id" });

history_price.belongsTo(Game, { foreignKey: "game_id" });



//exports all 6 models as a module
module.exports = {
  User,
  Comment,
  Post,
  Game,
  Platform,
  history_price,
};
