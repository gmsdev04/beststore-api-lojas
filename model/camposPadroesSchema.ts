import * as mongoose from 'mongoose'

const camposPadroesSchema  = new mongoose.Schema({

    nome: { type: String },
    produtivo: { type: Boolean },
    tipo : { type: Object}
    
},{ collection: 'camposPadroes' });

export default camposPadroesSchema;