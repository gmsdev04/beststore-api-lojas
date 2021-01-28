import * as HttpStatus from 'http-status'
import { interfaces, controller, httpGet, BaseHttpController, queryParam, requestParam} from 'inversify-express-utils'
import { injectable, inject } from "inversify";

import IdeaisDeCadastrosService from '../services/ideaisDeCadastrosService'

import {Request, Response} from 'express'

@controller("/api/v1/lojas/:idloja/ideais-de-cadastros")
class IdeaisDeCadastrosController extends BaseHttpController{
    
    private service: IdeaisDeCadastrosService;
    
    constructor(@inject('IdeaisDeCadastrosService') service : IdeaisDeCadastrosService){
        super();
        this.service = service;
    }

    @httpGet('/:idealcadastroid')
    async getById(@requestParam("idloja") _id : string,
                          @requestParam("_idealDeCadastroId") _idealDeCadastroId : string)
    {

        return await this.service.getById(_id, _idealDeCadastroId)
        .then(ideal => this.ok(ideal))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    @httpGet('')
    async getByTipo(@queryParam("tipo") tipo: string,
                            @requestParam("idloja") _id : string)
        {
            
        return await this.service.getByTipo(_id, tipo)
        .then(ideal => this.ok(ideal))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

  
}

export default IdeaisDeCadastrosController;