import * as HttpStatus from 'http-status'
import { interfaces, controller, httpGet} from 'inversify-express-utils'
import { injectable, inject } from "inversify";

import IdeaisDeCadastrosService from '../services/ideaisDeCadastrosService'

import {Request, Response} from 'express'

@controller("/api/v1/lojas/:idloja/ideais-de-cadastros")
class IdeaisDeCadastrosController implements interfaces.Controller{
    
    post(req : Request, res : Response){
        let idLoja = req.params.idloja;
        let novoIdealDeCadastro = req.body;
        
        IdeaisDeCadastrosService.create(idLoja, novoIdealDeCadastro)
        .then(lojaCriada => res.status(HttpStatus.CREATED).json({data : lojaCriada}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }
    
    @httpGet('/:idealcadastroid')
    getById(req : Request, res : Response){
        let _id = req.params.idloja;
        let _idealDeCadastroId = req.params.idealcadastroid;

        console.log(_id, _idealDeCadastroId);

        IdeaisDeCadastrosService.getById(_id, _idealDeCadastroId)
        .then(ideal => res.status(HttpStatus.OK).json({data : ideal}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

  
}

export default new IdeaisDeCadastrosController();