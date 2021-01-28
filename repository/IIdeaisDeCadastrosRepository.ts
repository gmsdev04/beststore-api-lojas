
interface IIdeaisDeCadastrosRepository {
    findById(_LojaId : string,_idealDeCadastroId : string): Promise<any>;
    findByTipo(_lojaId: string, tipo: string): Promise<any>;
}


export default IIdeaisDeCadastrosRepository;