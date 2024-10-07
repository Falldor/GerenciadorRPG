import { tipoHabilidade } from "./tipohabilidade.enum";

export interface habilidade{
    nome:String,
    descricao: String,
    tipo:tipoHabilidade
}