const router = require("express").Router();
const path = require("path");

// This is the 'get' route
router.get("/", async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, "../views/homepage.html"));
});

module.exports = router;

router.get("/login", async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/layouts/login.html"));
});

router.get("/dashboard", async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/layouts/dashboard.html"));
});
