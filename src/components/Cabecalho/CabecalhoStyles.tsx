import styled from 'styled-components'
import { backgroundColor } from '../../listas/StylesList'

export const Header = styled.header `
    background: ${backgroundColor[0]};
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
    min-height: 35px;

    h1{
        font-size: 24px;
        font-family: 'Mystery Quest', cursive;
        font-weight: bold;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    }

    @media(min-width: 480px){
        h1{
            font-size: 35px;
        }
    }

    @media(min-width: 768px){
        h1{
            font-size: 45px;
        }
    }

    @media(min-width: 1024px){
        padding: 15px 25px;
        h1{
            font-size: 64px;
        }
    }
`