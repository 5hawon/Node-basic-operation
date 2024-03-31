const express = require('express');
const https = require('https');

const app = express();

const port =3000;

app.get('/', (req, res) => {
    const URL ="https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid=7961a3c7e4cc6f6fe10b99f4e281136b"
    https.get(URL,function(response){
        console.log(response.statusCode);
        response.on("data",(data)=>{
            const weatherData = JSON.parse(data);
            const mainTemp =weatherData.main.temp
            console.log(mainTemp);
            res.write(mainTemp.toString());
            
            res.end();
        })
    })
   
})

app.listen(port,()=>{
    console.log("listening on port"+port);
})