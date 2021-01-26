var fs = require('fs');

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return Buffer.from(bitmap).toString('base64');
}

//Example Image
var base64str = base64_encode('kitten.jpg');
