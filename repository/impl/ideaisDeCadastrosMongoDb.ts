import * as mongoose from 'mongoose'
import ILojasRepository from '../ILojasRepository'
import lojasSchema from '../../model/lojasSchema'
import {Model, Document, Query} from 'mongoose'
import { injectable } from 'inversify';
import IIdeaisDeCadastrosRepository from '../IIdeaisDeCadastrosRepository';

@injectable()
class IdeaisDeCadastrosMongoDb implements IIdeaisDeCadastrosRepository{
    private _model : Model<Document<any>>;

    constructor(){
        this._model = mongoose.model('lojas',lojasSchema);
    }

    async findById(_lojaId: string, _idealDeCadastroId: string): Promise<any> {
        return await this._model.aggregate([
            [
              {
                '$match': {
                  '_id': new mongoose.Types.ObjectId(_lojaId)
                }
              }, {
                '$project': {
                  'ideaisDeCadastros': {
                    '$filter': {
                      'input': '$ideaisDeCadastros', 
                      'as': 'ideais', 
                      'cond': {
                        '$eq': [ '$$ideais._id', new mongoose.Types.ObjectId(_idealDeCadastroId)]
                      }
                    }
                  }
                }
              }, {
                '$replaceRoot': {
                  'newRoot': {
                    'data': '$ideaisDeCadastros'
                  }
                }
              }
            ]
          ]);
    }

    async findByTipo(_lojaId: string, tipo: string): Promise<any> {
      return await this._model.aggregate([
          [
            {
              '$match': {
                '_id': new mongoose.Types.ObjectId(_lojaId)
              }
            }, {
              '$project': {
                'ideaisDeCadastros': {
                  '$filter': {
                    'input': '$ideaisDeCadastros', 
                    'as': 'ideais', 
                    'cond': {
                      '$eq': [ '$$ideais.tipo', tipo]
                    }
                  }
                }
              }
            }, {
              '$replaceRoot': {
                'newRoot': {
                  'data': '$ideaisDeCadastros'
                }
              }
            }
          ]
        ]);
  }

    
}

export default IdeaisDeCadastrosMongoDb;

