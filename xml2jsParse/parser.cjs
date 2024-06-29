var fs = require('fs'),
xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/menu.xml', function(err, data) {
  parser.parseString(data, function (err, result) {
    var jsonData = JSON.stringify(result);
    fs.writeFile(__dirname + '/menu.json', jsonData, function(err) {
      if(err) { console.log('Error writing JSON file: ', err); } 
      else {  console.log('JSON file has been saved.');        }
    });
  });
});
