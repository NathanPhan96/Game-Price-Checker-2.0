// Dashboard Routes
// This is a set of routes that will be used to render the dashboard pages.
// All of these routes will be protected by the withAuth middleware function.

const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");
const { Game } = require("../models");

// TODO - create logic for the GET route for / that renders the dashboard homepage
// It should display all of the posts created by the logged in user
router.get("/", withAuth, async (req, res) => {
  let game = Game.findAll();
  res.render("admin-all-posts", { layout: "dashboard", game: game });
  // TODO - retrieve all posts from the database for the logged in user
  // render the dashboard template with the posts retrieved from the database
  //default layout is set to main.handlebars, layout need to be changed to dashboard to use dashboard.handlebars
  let posts = Post.findAll();
  res.render("admin-all-posts", { layout: "dashboard", posts: posts });

  // refer to admin-all-posts.handlebars write the code to display the posts
});

router.get("/game", withAuth, async (req, res) => {
  res.render("gameview", { layout: "dashboard" });
});
// TODO - create logic for the GET route for /new that renders the new post page
// It should display a form for creating a new post

// TODO - create logic for the GET route for /edit/:id that renders the edit post page
// It should display a form for editing an existing post

module.exports = router;
