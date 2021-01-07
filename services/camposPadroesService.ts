import CamposPadroesRepository from '../repository/camposPadroesRepository'

class CamposPadroesService {

    get(){
        return CamposPadroesRepository.find({});
    }   
    
    create(novoCampoPadrao){
        return CamposPadroesRepository.create(novoCampoPadrao);
    }

    getById(_id){
        return CamposPadroesRepository.findById(_id);
    }

    deleteById(_id){
        return CamposPadroesRepository.findByIdAndDelete(_id);
    }

    patchById(_id, campoPadraoAtualizacao){
        return CamposPadroesRepository.findByIdAndUpdate(_id,campoPadraoAtualizacao,{new: true});
    }
}

export default new CamposPadroesService();