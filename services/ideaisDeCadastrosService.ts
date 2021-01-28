//import LojasRepository from '../../repository/LojasRepository';
import { inject, injectable } from 'inversify';
import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import IIdeaisDeCadastrosRepository from '../repository/IIdeaisDeCadastrosRepository';

@injectable()
class IdeaisDeCadastrosService{
    static getById(_id: string, _idealDeCadastroId: string) {
        throw new Error('Method not implemented.');
    }

    private repository : IIdeaisDeCadastrosRepository;

    constructor(@inject('IIdeaisDeCadastrosRepository') repository : IIdeaisDeCadastrosRepository){
      this.repository = repository;
    }

    create(lojaId, novoIdealDeCadastro){
        novoIdealDeCadastro.versao = uuidv4();
        //return LojasRepository.findOneAndUpdate(lojaId, { "$push": { "ideaisDeCadastros": novoIdealDeCadastro } })
      
        return undefined;
    
      }

    getById(lojaId : string, _idealDeCadastroId : string) : any {
      return this.repository.findById(lojaId, _idealDeCadastroId);   
    }

}

export default IdeaisDeCadastrosService;