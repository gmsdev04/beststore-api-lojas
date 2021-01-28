//import LojasRepository from '../../repository/LojasRepository';
import { inject, injectable } from 'inversify';
import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import IIdeaisDeCadastrosRepository from '../repository/IIdeaisDeCadastrosRepository';

@injectable()
class IdeaisDeCadastrosService{
  
    private repository : IIdeaisDeCadastrosRepository;

    constructor(@inject('IIdeaisDeCadastrosRepository') repository : IIdeaisDeCadastrosRepository){
      this.repository = repository;
    }

    getById(lojaId : string, _idealDeCadastroId : string) : any {
      return this.repository.findById(lojaId, _idealDeCadastroId);   
    }

    getByTipo(lojaId : string, tipo : string){
      return this.repository.findByTipo(lojaId,tipo);
    }

}

export default IdeaisDeCadastrosService;