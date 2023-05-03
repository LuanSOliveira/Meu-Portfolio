import { IProjetos } from "../interfaces/Interfaces";
import { listaConhecimentos } from "./ConhecimentosList";

export const listaProjetos: IProjetos[] = [
    {
        id: 0,
        nome: 'Projeto Kanban',
        descricao: 'Projeto criado para simular um Kanban, um quadro de sinalização que controla os fluxos de produção ou transportes em uma indústria.',
        imagem: '../../public/Projeto1.png',
        url: 'https://projeto-kanban.vercel.app/',
        git: 'https://github.com/LuanSOliveira/Projeto-Kanban',
        tecnologias: [
            listaConhecimentos[0],
            listaConhecimentos[2],
            listaConhecimentos[3],
            listaConhecimentos[5],
            listaConhecimentos[7],
        ],
    },
    {
        id: 1,
        nome: 'Pokedex API',
        descricao: 'Projeto criado para simular uma pokedex consultando as informações em uma API pública.',
        imagem: '../../public/Projeto2.png',
        url: 'https://projeto-react-pokedex.vercel.app/',
        git: 'https://github.com/LuanSOliveira/Projeto-React-Pokedex',
        tecnologias: [
            listaConhecimentos[0],
            listaConhecimentos[1],
            listaConhecimentos[3],
            listaConhecimentos[5],
            listaConhecimentos[7],
        ],
    },
    {
        id: 2,
        nome: 'Calculadora React',
        descricao: 'Projeto criado em ReactJS onde é possível se utilizar das funções de uma calculadora básica.',
        imagem: '../../public/Projeto3.png',
        url: 'https://calculator-react-brown.vercel.app/',
        git: 'https://github.com/LuanSOliveira/calculator-react',
        tecnologias: [
            listaConhecimentos[0],
            listaConhecimentos[1],
            listaConhecimentos[3],
            listaConhecimentos[5],
        ],
    },
    {
        id: 3,
        nome: 'Biblioteca de Países',
        descricao: "Projeto criado em ReactJS onde é realizada a consulta de informações dos países do mundo em duas API's e apresenta para o usuário.",
        imagem: '../../public/Projeto4.png',
        url: 'https://onde-no-mundo.vercel.app/',
        git: 'https://github.com/LuanSOliveira/biblioteca-de-paises',
        tecnologias: [
            listaConhecimentos[0],
            listaConhecimentos[1],
            listaConhecimentos[3],
            listaConhecimentos[5],
        ],
    },
    {
        id: 4,
        nome: 'Gerenciador de Residências',
        descricao: 'Projeto criado em ReactJS onde é possível gerenciar casas alugadas informando seus locatários, datas de pagamentos e outros.',
        imagem: '../../public/Projeto5.png',
        url: 'https://gerenciador-de-residencias.vercel.app/',
        git: 'https://github.com/LuanSOliveira/gerenciador-de-residencias',
        tecnologias: [
            listaConhecimentos[0],
            listaConhecimentos[2],
            listaConhecimentos[3],
            listaConhecimentos[5],
            listaConhecimentos[10],
        ],
    },
    {
        id: 5,
        nome: 'Biblioteca de Acordes',
        descricao: 'Projeto criado para apresentar uma biblioteca de acordes para violão de forma simples.',
        imagem: '../../public/Projeto6.png',
        url: 'https://biblioteca-de-acordes.vercel.app/',
        git: 'https://github.com/LuanSOliveira/biblioteca-de-acordes',
        tecnologias: [
            listaConhecimentos[0],
            listaConhecimentos[2],
            listaConhecimentos[4],
            listaConhecimentos[5],
        ],
    },
]