const fs = require("fs");
const db = (dbPath) => ({
  load: function () {
    const data = require(dbPath);
    return data;
  },
  save: function (data) {
    // return new Promise((resolve, reject) => {
    //   fs.writeFile(dbPath, JSON.stringify(data), (err) => {
    //     if (err) {
    //       reject(err);
    //       return;
    //     }
    //     resolve(true);
    //   });
    // });
    fs.writeFileSync(dbPath, JSON.stringify(data));
  },
  addItem: function (item) {
    const data = this.load();
    data.push(item);
    this.save(data);
  },
  delItem: function (itemId) {
    const data = this.load();
    let res = data.filter((item) => item.id !== itemId);
    this.save(res);
  },
  updateItem: function (item) {
    const data = this.load();
    const itemIndex = data.findIndex((el) => el.id === item.id);
    data[itemIndex] = {
      ...item,
    };
    this.save(data);
  },
});
module.exports = db;