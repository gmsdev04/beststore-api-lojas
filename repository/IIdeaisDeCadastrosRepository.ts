
interface IIdeaisDeCadastrosRepository {
    findById(_LojaId : string,_idealDeCadastroId : string): Promise<any>;
}


export default IIdeaisDeCadastrosRepository;