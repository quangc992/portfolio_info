const info = require("../../../config/module/db.info");
const commonManage = require("../../common/manage/commonManage");
class infoManage {
  async find(req, res) {
    try {
      const filter = { isUse: true };
      let data = await commonManage.find(info, filter);
      console.log(data)
      return data;
    } catch (error) {}
  }

  async insert(req, res) {
    try {
      let designation = req.body.designation;
      let email = req.body.email;
      let address = req.body.address;
      let copyright = req.body.copyright;
      let imgLogo = req.body.imgLogo;
      let imgAvatar = req.body.imgAvatar;
      let facebook = req.body.facebook;
      let twitter = req.body.twitter;
      let dribbble = req.body.dribbble;
      let github = req.body.github;
      let isUse = req.body.isUse;

      const data = {
        designation,
        email,
        address,
        copyright,
        imgLogo,
        imgAvatar,
        facebook,
        twitter,
        dribbble,
        github,
        isUse,
      };
      const resultData = await commonManage.table(info, data);
      resultData = resultData[0];
      return res.status(200).json({ data: resultData });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        error: error.mesage,
      });
    }
  }
}

module.exports = new infoManage();
