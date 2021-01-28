import "reflect-metadata";
import * as  bodyParser from 'body-parser';
import * as cors from 'cors'
import { Container } from 'inversify';
import { InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { Application } from "express";



import Database from  './configuration/database'
import LojasController from './controller/lojasController'
import  './controller/ideaisDeCadastrosController'
import  './controller/lojasController'

class StartUp{
    public server: InversifyExpressServer;
    private _db : Database;
    private container : Container

    constructor(){
        this.container = new Container();
        this.server =  new InversifyExpressServer(this.container);
        this._db = new Database();
        this._db.createConnection();
   
    }

    configServer(){
        this.server.setConfig((app) =>{
            app.use(bodyParser.urlencoded({ extended: false}));
            app.use(bodyParser.json());
            this.enableCors(app);
        })
    }

    enableCors(app : Application){
        const options: cors.CorsOptions = {
            methods: "GET,OPTIONS,PUT,POST,DELETE,PATCH",
            origin: "*"
        }
        app.use(cors(options)); 
    }

  

    routes(){
        // this.app.route('/').get((req,res) => {
        //     res.send({ versao: '0.0.1'})
        // })
        
        // //lojas
        // this.app.route('/api/v1/lojas').get(LojasController.get);
        // this.app.route('/api/v1/lojas').post(LojasController.post);
        // this.app.route('/api/v1/lojas/:idloja').get(LojasController.getById);
        // this.app.route('/api/v1/lojas/:idloja').patch(LojasController.patchById);
        // this.app.route('/api/v1/lojas/:idloja').delete(LojasController.deleteById);
        
        // //ideiais de cadastros
        // this.app.route('/api/v1/lojas/:idloja/ideais-de-cadastros').post(IdeaisDeCadastrosController.post);
        // this.app.route('/api/v1/lojas/:idloja/ideais-de-cadastros/:idealcadastroid').get(IdeaisDeCadastrosController.getById);
    }

}

export default new StartUp();