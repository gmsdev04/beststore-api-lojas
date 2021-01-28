import LojasRepository from '../repository/lojasRepository';
import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

class IdeaisDeCadastrosService {

  
    
    create(lojaId, novoIdealDeCadastro){
        novoIdealDeCadastro.versao = uuidv4();
        return LojasRepository.findOneAndUpdate(lojaId, { "$push": { "ideaisDeCadastros": novoIdealDeCadastro } })
    }

    getById(lojaId, _idealDeCadastroId){
       return LojasRepository.aggregate([
            {
              '$match': {
                '_id': new mongoose.Types.ObjectId(lojaId)
              }
            }, {
              '$unwind': {
                'path': '$ideaisDeCadastros'
              }
            }, {
              '$match': {
                'ideaisDeCadastros._id': new mongoose.Types.ObjectId(_idealDeCadastroId)
              }
            }, {
              '$project': {
                'nome': 0, 
                '_id': 0
              }
            }
          ])
    }

}

export default new IdeaisDeCadastrosService();