const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT | 3000;

app.get("/", async (req,res)=>{
    try{
        const url = "http://mma-funcapp.azurewebsites.net";
        const response = await.axios.get(url);
        res.send(`${response.data}`);
    }
    catch(error){
        res.status(500).send(`${error.message}`)
    }
})

app.listen(port, ()=>{
    console.log("server on and listening")
});


