var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", function(req,res){
    res.json(["Tony","Lisa","Michael","Ginger","Food"])
})