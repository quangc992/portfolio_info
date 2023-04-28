const router = require("express").Router();

const infoManage = require("../API/info/manage/infoManage");

router.get("/find", infoManage.find);
router.post("/insert", infoManage.insert);

router.use("/*", (req, res) =>
  res.status(403).json({ message: "Không thể tìm thấy API" })
);

module.exports = router;
