import * as mongoose from 'mongoose'

const campoCadastro  = new mongoose.Schema({
    nome : String,
    obrigatorio : Boolean ,
    tipo : {
        nome : String,
        alias : String,
    },
    versao: String
});

export default campoCadastro;