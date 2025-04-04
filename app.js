const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT | 3000;

app.get("/", async (req,res)=>{
    try{
        const url = "https://pokeapi.co/api/v2/pokemon/ditto";
        const response = await.axios.get(url);
        res.status(200).send(`${response.data}`);
        console.log("Success!")
    }
    catch(error){
        res.status(500).send(`${error.message}`)
    }
})

app.listen(port, ()=>{
    console.log("server on and listening")
});


