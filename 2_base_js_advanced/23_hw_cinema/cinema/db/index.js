const fs = require('fs') // модуль node для роботи з файлами
const db = (dbPath) => ({
    load: function () { // для передачі списку кінотеатрів
        const data = JSON.parse(fs.readFileSync(dbPath))
        return data
    },
    save: function (data) {
        fs.writeFileSync(dbPath, JSON.stringify(data));
    },
    addItem: function (item) {
        const data = this.load();
        data.push(item);
        this.save(data);
    },
    getItemById: function (id) {
        const data = this.load()
        const item = data.find((item) => item.id === id)
        return item    
    },
    delItem: function (itemId) {
        const data = this.load();
        let res = data.filter((item) => item.id !== itemId); // change !=
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
})

module.exports = db