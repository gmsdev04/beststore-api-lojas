import * as express from 'express';
import * as  bodyParser from 'body-parser';
import * as cors from 'cors'

import Database from  './configuration/database'
import LojasController from './controller/lojasController'
import IdeaisDeCadastrosController from './controller/ideaisDeCadastrosController'

class StartUp{
    public app: express.Application;
    private _db : Database;
    private bodyParser;

    constructor(){
        this.app = express();
        this._db = new Database();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    enableCors(){
        const options: cors.CorsOptions = {
            methods: "GET,OPTIONS,PUT,POST,DELETE,PATCH",
            origin: "*"
        }

        this.app.use(cors(options)); 
    }

    middler(){
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false}));
    }

    routes(){
        this.app.route('/').get((req,res) => {
            res.send({ versao: '0.0.1'})
        })
        
        //lojas
        this.app.route('/api/v1/lojas').get(LojasController.get);
        this.app.route('/api/v1/lojas').post(LojasController.post);
        this.app.route('/api/v1/lojas/:idloja').get(LojasController.getById);
        this.app.route('/api/v1/lojas/:idloja').patch(LojasController.patchById);
        this.app.route('/api/v1/lojas/:idloja').delete(LojasController.deleteById);
        
        //ideiais de cadastros
        this.app.route('/api/v1/lojas/:idloja/ideais-de-cadastros').post(IdeaisDeCadastrosController.post);
        this.app.route('/api/v1/lojas/:idloja/ideais-de-cadastros/:idealcadastroid').get(IdeaisDeCadastrosController.getById);
    }

}

export default new StartUp();