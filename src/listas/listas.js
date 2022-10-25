import {v4 as uuid} from "uuid"

export const listaConhecimentos = [
    {
        id: uuid(),
        nome: "HTML",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        nivel: "principal"
    },
    {
        id: uuid(),
        nome: "CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        nivel: "principal"
    },
    {
        id: uuid(),
        nome: "JAVASCRIPT",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        nivel: "principal"
    },
    {
        id: uuid(),
        nome: "REACT",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        nivel: "principal"
    },
    {
        id: uuid(),
        nome: "REDUX",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        nivel: "principal"
    },
    {
        id: uuid(),
        nome: "SASS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        nivel: "principal"
    },
    {
        id: uuid(),
        nome: "VSCODE",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        nivel: "principal"
    },

    {
        id: uuid(),
        nome: "TYPESCRIPT",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        nivel: "outros"
    },
    {
        id: uuid(),
        nome: "NODE.JS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        nivel: "outros"
    },
    {
        id: uuid(),
        nome: "PYTHON",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        nivel: "outros"
    },
    {
        id: uuid(),
        nome: "PYCHARM",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
        nivel: "outros"
    },
    {
        id: uuid(),
        nome: "MYSQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        nivel: "outros"
    },
    {
        id: uuid(),
        nome: "POSTGRESQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        nivel: "outros"
    },
];

export const listaProjetos = [
    {
        id: uuid(),
        nome: "To Do List",
        tumb: "src/assets/tumbs/tumb-toDoList.png",
        descricao: "Projeto criado para simular um Kanban, um quadro de sinalização que controla os fluxos de produção ou transportes em uma indústria.",
        estado: "concluido",
        projeto: "/projeto-to-do-list",
        ide: [
            {
                id: uuid(),
                img: listaConhecimentos[6].img,
                nome: listaConhecimentos[6].nome
            }
        ],
        linguagem: [
            {
                id: uuid(),
                img: listaConhecimentos[0].img,
                nome: listaConhecimentos[0].nome
            },
            {
                id: uuid(),
                img: listaConhecimentos[5].img,
                nome: listaConhecimentos[5].nome
            },
            {
                id: uuid(),
                img: listaConhecimentos[2].img,
                nome: listaConhecimentos[2].nome
            },
            {
                id: uuid(),
                img: listaConhecimentos[3].img,
                nome: listaConhecimentos[3].nome
            },
            {
                id: uuid(),
                img: listaConhecimentos[4].img,
                nome: listaConhecimentos[4].nome
            },
        ]
    },
    {
        id: uuid(),
        nome: "Pokedex",
        tumb: "src/assets/tumbs/tumb-pokedex.png",
        descricao: "Projeto criado para simular uma pokedex consultando as informações em uma API pública.",
        estado: "concluido",
        projeto: "/projeto-pokedex",
        ide: [
            {
                id: uuid(),
                img: listaConhecimentos[6].img,
                nome: listaConhecimentos[6].nome
            }
        ],
        linguagem: [
            {
                id: uuid(),
                img: listaConhecimentos[0].img,
                nome: listaConhecimentos[0].nome
            },
            {
                id: uuid(),
                img: listaConhecimentos[1].img,
                nome: listaConhecimentos[1].nome
            },
            {
                id: uuid(),
                img: listaConhecimentos[2].img,
                nome: listaConhecimentos[2].nome
            },
            {
                id: uuid(),
                img: listaConhecimentos[3].img,
                nome: listaConhecimentos[3].nome
            },
            {
                id: uuid(),
                img: listaConhecimentos[4].img,
                nome: listaConhecimentos[4].nome
            },
        ]
    },
    {
        id: uuid(),
        nome: "EM BREVE",
        tumb: "src/assets/tumbs/tumb-emBreve.jpeg",
        descricao: "PROJETO EM PRODUÇÃO",
        estado: "producao",
        ide: [
            {
                id: uuid(),
                img: "src/assets/img/icon-relogio.png",
                nome: "EM BREVE"
            }
        ],
        linguagem: [
            {
                id: uuid(),
                img: "src/assets/img/icon-relogio.png",
                nome: "EM BREVE"
            }
        ]
    },
]