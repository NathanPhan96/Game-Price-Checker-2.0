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
  try {
    let game = Game.findAll();
    // TODO - retrieve all posts from the database for the logged in user
    // render the dashboard template with the posts retrieved from the database
    //default layout is set to main.handlebars, layout need to be changed to dashboard to use dashboard.handlebars
    let posts = Post.findAll();
    res.render("admin-all-posts", {
      layout: "dashboard",
      posts: posts,
      game: game,
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // refer to admin-all-posts.handlebars write the code to display the posts
});

router.get("/gameData/:id", withAuth, async (req, res) => {
  res.render("gameview", { layout: "dashboard", game: game });
});
// TODO - create logic for the GET route for /new that renders the new post page
// It should display a form for creating a new post

// TODO - create logic for the GET route for /edit/:id that renders the edit post page
// It should display a form for editing an existing post
router.get("/gameData/:id", withAuth, async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Game,
          attributes: ["name"],
        },
      ],
    });
    if (!gameData) {
      res.status(404).json({ message: "No game found with this id!" });
      return;
    }
    const game = gameData.get({ plain: true });
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
