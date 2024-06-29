import * as fs from 'fs';
import * as xml2js from 'xml2js';

const parser = new xml2js.Parser();
fs.readFile(__dirname + '/menu.xml', (_err, data) => {
    parser.parseString(data.toString(), (_err, result) => {
        console.log(JSON.stringify(result, null, 2));
        console.log(result.recipe.asian[0].menu[0].title[0])
    });
});
