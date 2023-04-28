const info = require("./info");

function router(app) {
  app.use("/info", info);

  app.use("/*", (req, res, next) => {
    res.status(403).json({ message: "Không thể tìm thấy API" });
  });
}

module.exports = router;
