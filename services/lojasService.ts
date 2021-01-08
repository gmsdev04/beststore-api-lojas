import LojasRepository from '../repository/lojasRepository'

class LojasServices {

    get(){
        return LojasRepository.find({});
    }   
    
    create(novaLoja){
        return LojasRepository.create(novaLoja);
    }

    getById(_id){
        return LojasRepository.findById(_id);
    }

    deleteById(_id){
        return LojasRepository.findByIdAndDelete(_id);
    }

    patchById(_id, lojaAtualizacao){
        return LojasRepository.findByIdAndUpdate(_id,lojaAtualizacao,{new: true});
    }
}

export default new LojasServices();