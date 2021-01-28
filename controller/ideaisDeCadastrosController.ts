import * as HttpStatus from 'http-status'
import { interfaces, controller, httpGet, BaseHttpController} from 'inversify-express-utils'
import { injectable, inject } from "inversify";

import IdeaisDeCadastrosService from '../services/ideaisDeCadastrosService'

import {Request, Response} from 'express'

@controller("/api/v1/lojas/:idloja/ideais-de-cadastros")
class IdeaisDeCadastrosController extends BaseHttpController{
    
    post(req : Request, res : Response){
        let idLoja = req.params.idloja;
        let novoIdealDeCadastro = req.body;
        
        return IdeaisDeCadastrosService.create(idLoja, novoIdealDeCadastro)
        .then(lojaCriada => res.status(HttpStatus.CREATED).json({data : lojaCriada}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }
    
    @httpGet('/:idealcadastroid')
    private async getById(req : Request, res : Response){
        let _id = req.params.idloja;
        let _idealDeCadastroId = req.params.idealcadastroid;

        console.log(_id, _idealDeCadastroId);

        return await IdeaisDeCadastrosService.getById(_id, _idealDeCadastroId)
        .then(ideal => this.ok({data : ideal}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

  
}

export default new IdeaisDeCadastrosController();