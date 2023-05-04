import styled from "styled-components";
import { backgroundColor } from "../../listas/StylesList";

interface PropsTexto {
    tamanho: string,
}

export const Container = styled.div`
    padding: 10px 0px 0px 5px;

    .TextoIndicacao{
        font-size: 22px;
        text-align: center;
        margin-bottom: 5px;
    }

    @media(min-width: 1280px){
        padding-top: 25px;
    }

    @media(min-width: 1600px){
        padding-top: 45px;
    }
`

export const BoxFiltro = styled.div`
    text-align: center;

    button{
        background: ${backgroundColor[2]};
        font-size: 18px;
        font-weight: bold;
        width: 120px;
        height: 30px;
        border: none;
        border-radius: 25px;
        box-shadow: 2px 4px 4px 0 rgba(0,0,0,0.25);
        text-align: center;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        cursor: pointer;
        margin: 10px;
    }

`
export const BoxTecnologia = styled.div`

    .ListaTecnologias{
        margin-top: 25px;
        text-align: center;
    }

    .BoxLista{
        img{
            background: ${backgroundColor[2]};
            width: 45px;
            padding: 10px;
            margin: 8px;
            border: none;
            border-radius: 20px;
            box-shadow: 1px 4px 4px 0px rgba(0,0,0,0.25);
            cursor: pointer;
            transition: box-shadow 0.3s;
    
            &:hover{
                box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.521);
            }
        }
    }

    .BoxDescricao{
        margin-top: 20px;
        h2{
            font-size: 40px;
            text-shadow: 0 4px 4px rgba(0,0,0,0.25);
            margin-bottom: 25px;
        }
        p{
            font-size: 25px;
            text-align: justify;
            padding-right: 25px;
        }        
    }

    @media(min-width: 1024px){
        display: flex;
        justify-content: center;

        .BoxLista{
            width: 450px;
        }
    }

    @media(min-width: 1366px){

        .BoxLista{
            width: 500px;
            margin-right: 25px;

            img{
                width: 60px;
            }
        }
    }

    @media(min-width: 1600px){
        .BoxDescricao{
            h2{
                font-size: 62px;
            }

            p{
                font-size: 32px;
            }
        }
    }
`

export const BoxDescricao = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    background: rgba(60,64,72,0.55);
    display: flex;
    justify-content: center;
    align-items: center;

    .BoxInformacao{
        background: ${backgroundColor[2]};
        width: 295px;
        min-height: 400px;
        text-align: justify;
        padding: 20px;
        border: none;
        border-radius: 15px;
        box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.25);

        div{
            text-align: right;

            img{
                cursor: pointer;
                width: 25px;
            }
        }

        h2{
            font-size: 36px;
            text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        }
    }
`

export const TextoDescricao = styled.p`
    font-size: ${({tamanho}:PropsTexto) => `${tamanho}px`};
    margin-top: 10px;
`