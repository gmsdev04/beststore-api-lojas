import ILojasRepository from '../repository/ILojasRepository'
import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'inversify';

@injectable()
class LojasServices {
    constructor( @inject("ILojasRepository") private repository: ILojasRepository ) {}

    getById(_id){
        return this.repository.findById(_id);
    }
        
    async create(novaLoja){
         novaLoja.versao = uuidv4();
         return this.repository.create(novaLoja);
     }

    async deleteById(_id) : Promise<any> {
       return await this.repository.findByIdAndDelete(_id);
    }

    async patchById(_id, lojaAtualizacao) : Promise<any>{
        return await this.repository.findByIdAndUpdate(_id,lojaAtualizacao);
    }
}

export default  LojasServices;