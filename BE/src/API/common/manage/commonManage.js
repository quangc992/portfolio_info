const { NO_TABLE } = require("../CommonConstant");

async function find(table, filter, select, skip, limit, sort) {
  try {
    // if (!table || table == undefined) return NO_TABLE;
    await table
      .find()
      // .find(filter)
      .select(select)
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .then((data) => {
        console.log(data)
        return data;
      });
  } catch (error) {
    console.log(error);
    return {
      status: false,
      error: error.mesage,
    };
  }
}

async function insert(table, data) {
  try {
    const tableNew = new table(data);
    await tableNew.save().then((data) => {
      if (data.modifiedCount < 1) return { status: false };
      return { status: true };
    });
  } catch (error) {
    console.log(error);
    return {
      status: false,
      error: error.mesage,
    };
  }
}

module.exports = {
  find,
  insert,
};
