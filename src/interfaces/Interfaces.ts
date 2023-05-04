export type Tipos = 'front' | 'back' | 'mobile';

export interface IConhecimentos {
    id: number,
    nome: string,
    imagem: string,
    descricao: string,
    tipo: Tipos,
    fonte: string,
}

export interface IProjetos {
    id: number,
    nome: string,
    descricao: string,
    imagem: string,
    url: string,
    git: string,
    tecnologias: IConhecimentos[],
}