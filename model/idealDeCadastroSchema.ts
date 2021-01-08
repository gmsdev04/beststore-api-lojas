import * as mongoose from 'mongoose'
import campoCadastro from './campoCadastro'

const idealDeCadastroSchema  = new mongoose.Schema({

    tipo: String,
    campos: [campoCadastro],
    versao: String
    
});

export default idealDeCadastroSchema;