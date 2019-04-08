const Router = require("express").Router;
const router = Router();

router.get("/", (req, res, next) => {
  res.redirect("/docs");
});

const singleGet = require("./controllers/assignment/single/get");
const singleCreate = require("./controllers/assignment/single/create");
const singleUpdate = require("./controllers/assignment/single/update");
const singleDelete = require("./controllers/assignment/single/delete");

// single assignment restful apis
router.get("/assignment/:id", singleGet);
router.post("/assignment", singleCreate);
router.put("/assignment/:id", singleUpdate);
router.delete("/assignment/:id", singleDelete);

const bulkGet = require("./controllers/assignment/bulk/get");

// bulk assignment restful apis
router.get("/bulk/assignment/:ids", bulkGet);

module.exports = router;
