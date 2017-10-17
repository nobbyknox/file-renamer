const fs = require('fs');
const path = require('path');
const Moment = require('moment');

fs.readdir('./in', (err, files) => {
    files.forEach((item) => {
        fs.stat('./in/' + item, (err, stats) => {
            if (err) {
                console.error(err);
            } else {
                let tmp = new Moment(stats.birthtime).format('YYYY-MM-DD HH.mm.ss');

                fs.copyFile(`./in/${item}`, `./out/${tmp}${path.extname(item)}`, (err) => {
                    if (err) throw err;
                });
            }
        });
    });
});
