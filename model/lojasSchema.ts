import * as mongoose from 'mongoose'
import idealDeCadastroSchema from './idealDeCadastroSchema'

const lojasSchema  = new mongoose.Schema({

    nome: String ,
    ideaisDeCadastro : [idealDeCadastroSchema]
    
},{ collection: 'lojas' });

export default lojasSchema;