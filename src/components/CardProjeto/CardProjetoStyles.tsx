import styled from "styled-components";
import { backgroundColor } from "../../listas/StylesList";

export const BoxProjeto = styled.div`
    background: ${backgroundColor[2]};
    margin: 10px 0;
    padding-top: 25px;
    width: 282px;
    height: 208px;
    text-align: center;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    transition: box-shadow 0.3s;
    cursor: pointer;
    
    img{
        width: 264px;
        height: 146px;
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    }

    h3{
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        margin-top: 10px;
    }

    &:hover{
        box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.411);
    }

    @media(min-width: 600px){
        margin: 10px 5px;
    }

    @media(min-width: 800px){
        margin: 15px;
    }

    @media(min-width: 1280px){
        width: 300px;
        height: 220px;

        img{
            width: 275px;
            height: 155px;
        }

        h3{
            font-size: 22px;
        }
    }

    @media(min-width: 1440px){
        width: 330px;
        height: 240px;
        margin: 20px;

        img{
            width: 295px;
            height: 175px;
        }

        h3{
            font-size: 22px;
        }
    }

    @media(min-width: 1680px){
        width: 365px;
        height: 265px;
        margin: 25px;

        img{
            width: 310px;
            height: 190px;
        }

        h3{
            font-size: 25px;
        }
    }

`