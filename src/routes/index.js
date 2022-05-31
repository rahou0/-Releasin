const router = require("express").Router();

router.get("/category", getAllCategoriesToQuery);
router.get("/location", getGeoLocationFromIP);

router.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

module.exports = router;
