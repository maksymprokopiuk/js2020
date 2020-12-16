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
})

module.exports = db