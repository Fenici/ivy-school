const mongoose = require ("mongoose")
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const bodyParser = require("body-parser");
const router = require("./router")

/* 
Mongo DB configuration 
*/

mongoose.connect("mongodb://localhost:27017/ivy", { useNewUrlParser: true });
var db = mongoose.connection

db.once('open',function () {
    console.log(`The database is created and running!`)
})


/* 
    Express create server
 */
const app = express();
const port = 8080;

//app.get(path, callback [, callback ...])

app.get("/", (req, res) => res.send("Hello World!"));

//open api setup 
const nativeObject = YAML.load("restfulapi.yaml");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(nativeObject));



app.use(bodyParser.json());
app.use(router);


app.listen(port, err => {
  if (err) {
    console.err(err);
  }

  console.info("Server started at port %s.", port);
});