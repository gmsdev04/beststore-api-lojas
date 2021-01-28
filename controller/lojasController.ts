import * as HttpStatus from 'http-status'
import LojasService from '../services/lojasService'

import {Request, Response} from 'express'
import { controller, httpGet } from 'inversify-express-utils';

@controller('/api/v1/lojas')
class LojasController {
    get(req : Request,res : Response){
        LojasService.get()
        .then(lojas => res.status(HttpStatus.OK).json({data : lojas}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    post(req : Request, res : Response){
        let novaLoja = req.body;
        
        LojasService.create(novaLoja)
        .then(lojaCriada => res.status(HttpStatus.CREATED).json({data : lojaCriada}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    @httpGet('/:idloja')
    getById(req : Request, res : Response){
        let _id = req.params.idloja;

        console.log('_id:',_id)

        LojasService.getById(_id)
        .then(loja => res.status(HttpStatus.OK).json({data : loja}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    deleteById(req : Request, res : Response){
        let _id = req.params.idloja;

        LojasService.deleteById(_id)
        .then(() => res.status(HttpStatus.OK).json({message : "Deletado com sucesso"}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }


    patchById(req : Request, res : Response){
        let _id = req.params.idloja;
        let lojaAtualizada = req.body;

        LojasService.patchById(_id,lojaAtualizada)
        .then(campo => res.status(HttpStatus.OK).json({data : campo}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }
}

export default new LojasController();