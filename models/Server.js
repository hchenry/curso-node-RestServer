const express = require('express')
const cors = require('cors');

class ServerJs{

    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;
        this.userpath='/api/user';

        //Middleware
        this.middleware();

        //Rutas de aplicacion
        this.routes();
    }

    middleware()
    {
        //cors
        this.app.use(cors());

        //
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));

    }

    routes()
    {
       this.app.use(this.userpath, require('../routes/user'));
       


    }

    listen()
    {
        this.app.listen(this.port) 
    }


};


module.exports = ServerJs;