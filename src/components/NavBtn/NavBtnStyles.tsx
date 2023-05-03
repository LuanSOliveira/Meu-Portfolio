import styled from "styled-components";
import { backgroundColor } from "../../listas/StylesList";

interface Props {
    margem:string;
}

export const Botao = styled.button<Props>`
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
    margin: ${({margem}) => `${margem}px`};
    transition: background 0.2s;

    &:hover{
        background: #c2c2c2;
    }

    @media(min-width: 480px){
        font-size: 22px;
        width: 170px;
        height: 40px;
    }

    @media(min-width: 768px){
        font-size: 28px;
        width: 230px;
        height: 50px;
    }

    @media(min-width: 1366px){
        font-size: 32px;
        width: 250px;
        height: 60px;
    }

    @media(min-width: 1440px){
        font-size: 38px;
        width: 285px;
        height: 72px;
    }
`