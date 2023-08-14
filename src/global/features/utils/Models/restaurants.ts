import { Categories } from '../Enum/EnumCategory'

export type Restaurant = {
    id: number,
    name: string,
    descricao: string,
    avaliacao: number,
    categories : Categories,
    urlPortada: string
}