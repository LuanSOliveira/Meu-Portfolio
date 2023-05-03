import styled from "styled-components";
import { backgroundColor } from "../../listas/StylesList";

export const Container = styled.div`
    padding: 10px 0px 0px 5px;

    .Imagem{
        position: absolute;
        width: 150px;
        bottom: 0px;
        right: 0px;
    }

    @media(min-width: 414px){
        .Imagem{
            width: 180px;
        }
    }

    @media(min-width: 600px){
        .Imagem{
            width: 220px;
        }
    }

    @media(min-width: 768px){
        padding: 25px 0 0 12px;
        .Imagem{
            width: 270px;
        }
    }

    @media(min-width: 1024px){
        padding: 30px 0 0 0;
        display: flex;
        justify-content: center;

        .Imagem{
            width: 170px;
            position: static;
            margin-right: 150px;
        }
    }

    @media(min-width: 1440px){
        padding-top: 50px;

        .Imagem{
            width: 250px;
        }
    }
`

export const BoxInformacao = styled.div`
    margin-bottom: 15px;

    h2{
        font-size: 32px;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    }

    p{
        font-size: 24px;
    }

    img{
        width: 50px;
    }

    button{
        background: ${backgroundColor[2]};
        font-size: 20px;
        font-weight: bold;
        width: 150px;
        height: 35px;
        border: none;
        border-radius: 25px;
        box-shadow: 2px 4px 4px 0 rgba(0,0,0,0.25);
        text-align: center;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        cursor: pointer;
        margin-top: 35px;
    }
`