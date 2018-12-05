import * as loki from 'lokijs';
import * as express from 'express';
import { getServers } from 'dns';

let port:number = 8000;

let server = express();
server.use(express.json());

//Datenbank
const db = new loki("loki.json");
let guests = db.addCollection("guests");


server.listen(port, function(){
    console.log("API is listening");
});


server.get("/party", function(request, response){
    response.send({
        name: "birthdayParty",
        location: "Mitterkirchen",
        date: "22.02.2019"
    })
})

server.get("/guests", function(request, response){
    response.send(guests.find());
})