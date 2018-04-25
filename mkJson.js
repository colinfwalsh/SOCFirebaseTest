var fs = require("fs");
var sampleObject = fs.readFileSync("./data.json").toString('utf-8'); 
fs.writeFile("./object.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
