import * as HttpStatus from 'http-status'
import CamposPadroesService from '../services/camposPadroesService'
import {Request, Response} from 'express'

class CamposPadroesController {
    get(req : Request,res : Response){
        CamposPadroesService.get()
        .then(camposPadroes => res.status(HttpStatus.OK).json({data : camposPadroes}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    post(req : Request, res : Response){
        let novoCampoPadrao = req.body;
        
        CamposPadroesService.create(novoCampoPadrao)
        .then(campoCriado => res.status(HttpStatus.CREATED).json({data : campoCriado}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    getById(req : Request, res : Response){
        let _id = req.params.id;

        CamposPadroesService.getById(_id)
        .then(campo => res.status(HttpStatus.OK).json({data : campo}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    deleteById(req : Request, res : Response){
        let _id = req.params.id;

        CamposPadroesService.deleteById(_id)
        .then(() => res.status(HttpStatus.OK).json({message : "Deletado com sucesso"}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }


    patchById(req : Request, res : Response){
        let _id = req.params.id;
        let campoAtualizado = req.body;

        CamposPadroesService.patchById(_id,campoAtualizado)
        .then(campo => res.status(HttpStatus.OK).json({data : campo}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }
}

export default new CamposPadroesController();