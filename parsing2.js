var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile('note.xml',function(err,data){
    parser.parseString(data, function (err, result) {
        console.dir(result);
        console.log('Done');
    });
});