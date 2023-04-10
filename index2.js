
const fs = require('fs');
const path = require('path');
const CSVToJSON = require('csvtojson');

const filenames = fs.readdirSync('input/');
filenames.map((fileName) => {
    CSVToJSON().fromFile('input/' + fileName)
        .then(content => {
            const written = writeJson(fileName.substring(0, fileName.length-4), content);
            console.log("wrote " + written);
        }).catch(err => {
            console.log(err);
        });
})

const writeJson = (name, data) => {
    const projRootLocation = process.cwd();
    const outputName = name + '.json';
    const loc = path.resolve(projRootLocation, 'output', outputName);

    fs.writeFileSync(loc, JSON.stringify(data, null, 2));

    return outputName;
}
