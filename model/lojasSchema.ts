import * as mongoose from 'mongoose'
import idealDeCadastroSchema from './idealDeCadastroSchema'

const lojasSchema  = new mongoose.Schema({

    nome: String ,
    ideaisDeCadastros : [idealDeCadastroSchema]
    
},{ collection: 'lojas', versionKey: false });

export default lojasSchema;