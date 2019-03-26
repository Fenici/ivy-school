const express = require('express')

const app = express();
const port = 3001

//app.get(path, callback [, callback ...])

app.get("/", (req, res) => res.send("Hello World!"));


app.listen(port, (err)=>{
    if(err){
        console.err(err);
        
    }

    console.info('Server started at port %s.', port)

})