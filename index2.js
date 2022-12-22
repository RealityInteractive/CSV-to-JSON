
const fs = require('fs');
const path = require('path');

// require csvtojson module
const CSVToJSON = require('csvtojson');
const inputCsvName = 'bespoke_refrigerator_accessory_catalog.csv';
const outputJsonName = 'bespoke_refrigerator_accessory_catalog.json';

// convert users.csv file to JSON array
CSVToJSON().fromFile('input/' + inputCsvName)
    .then(content => {
        writeJson(content);
    }).catch(err => {
        // log error if any
        console.log(err);
    });

    
const writeJson = (data) => {
    const projRootLocation = process.cwd();
    const loc = path.resolve(projRootLocation, 'output', outputJsonName);
    
    fs.writeFileSync(loc, JSON.stringify(data, null, 2));
}