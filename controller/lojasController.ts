import LojasService from '../services/lojasService'
import {Request, Response} from 'express'
import { BaseHttpController, controller, httpDelete, httpGet, httpPatch, httpPost, requestParam } from 'inversify-express-utils';
import { inject } from 'inversify';

@controller('/api/v1/lojas')
class LojasController extends BaseHttpController{

    lojasService : LojasService

    constructor(@inject('LojasService') lojasService : LojasService){
        super();
        this.lojasService = lojasService;
    }

    @httpGet('/:idloja')
    async getById(@requestParam("idloja") idloja : string) : Promise<any>
    {
        return await this.lojasService.getById(idloja)
            .then(loja => this.ok({data : loja}))
            .catch(error =>console.error.bind(console,`Error ${error}`));
    }

     @httpPost('')
    async post(req : Request, res : Response) : Promise<any>{
         let novaLoja = req.body;
        
         return await this.lojasService.create(novaLoja)
         .then(lojaCriada => this.created(`/api/v1/lojas/${lojaCriada.id}`,{data : lojaCriada}))
         .catch(error => console.error.bind(console,`Error ${error}`));
     }

    @httpDelete('/:idloja')
    async deleteById(@requestParam("idloja") idloja : string){
  
        return await this.lojasService.deleteById(idloja)
        .then(() => this.ok({message : "Deletado com sucesso"}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    @httpPatch('/:idloja')
    async patchById(req : Request, res : Response){
        let _id = req.params.idloja;
        let lojaAtualizada = req.body;

        return await this.lojasService.patchById(_id,lojaAtualizada)
        .then(campo => this.ok({data : campo}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }
}

export default  LojasController;