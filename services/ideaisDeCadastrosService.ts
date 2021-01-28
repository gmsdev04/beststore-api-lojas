//import LojasRepository from '../../repository/LojasRepository';
import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';



class IdeaisDeCadastrosService implements IdeaisDeCadastrosService{

  
    
    create(lojaId, novoIdealDeCadastro){
        novoIdealDeCadastro.versao = uuidv4();
        //return LojasRepository.findOneAndUpdate(lojaId, { "$push": { "ideaisDeCadastros": novoIdealDeCadastro } })
      
        return undefined;
    
      }

    getById(lojaId, _idealDeCadastroId){
      return undefined;
    
      //  return LojasRepository.aggregate([
      //       {
      //         '$match': {
      //           '_id': new mongoose.Types.ObjectId(lojaId)
      //         }
      //       }, {
      //         '$unwind': {
      //           'path': '$ideaisDeCadastros'
      //         }
      //       }, {
      //         '$match': {
      //           'ideaisDeCadastros._id': new mongoose.Types.ObjectId(_idealDeCadastroId)
      //         }
      //       }, {
      //         '$project': {
      //           'nome': 0, 
      //           '_id': 0
      //         }
      //       }
      //     ])
    }

}

export default new IdeaisDeCadastrosService();