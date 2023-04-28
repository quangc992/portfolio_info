const info = require("../../../config/module/db.info");
const commonManage = require("../../common/manage/commonManage");
const { NO_DATA, SUCCESS } = require('../infoConstant')
class infoManage {
  async find(req, res) {
    try {
      const filter = { isUse: true };
      // let data =
       await commonManage.find(info, );
      console.log(data)
      if(!data) {
        res.status(400).json({ status: NO_DATA })
      }else{
        res.status(200).json({ status: SUCCESS, data: data })
      }

      return res.status(500).json({
        status: 500,
        error: error.mesage,
      });
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
      const resultData = await commonManage.insert(info, data);
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
