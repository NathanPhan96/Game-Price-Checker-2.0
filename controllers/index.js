const router = require("express").Router();

const homeRoutes = require("./routes.js");

router.use("/", homeRoutes);

module.exports = router;
