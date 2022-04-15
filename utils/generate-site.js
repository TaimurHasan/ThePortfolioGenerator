const fs = require("fs");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            //if there is an error, reject the Promise and send to Promise's catch method
            if(err) {
                reject(err);
                return;
            }

            // if all goes well, resolve the Promise and send successful data to then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Copied!'
            });
        })
    })
}

module.exports = { writeFile, copyFile };