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

    findById(_lojaId: string, _idealDeCadastroId: string): any {
        return this._model.aggregate([
            {
              '$match': {
                '_id': new mongoose.Types.ObjectId(_lojaId)
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
          ]);
    }


    
}

export default IdeaisDeCadastrosMongoDb;

