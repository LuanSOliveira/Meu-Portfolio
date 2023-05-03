import styled from "styled-components";

export const Container = styled.div`
    padding: 10px 0px 0px 5px;

    img{
        width: 200px;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }

    h2{
        margin-top: 10px;
        font-size: 36px;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    }

    p{
        font-size: 20px;
    }

    @media(min-width: 414px){
        img{
            width: 250px;
        }
    }
    @media(min-width: 600px){
        img{
            width: 350px;
        }

        h2{
            font-size: 48px;
        }

        p{
            font-size: 26px;
        }
    }

    @media(min-width: 1024px){
        display: flex;
        img{
            position: static;
            width: 320px;
            margin: 0 65px 0 25px;
        }
    }

    @media(min-width: 1280px){
        padding-top: 35px;
        img{
            width: 400px;
        }

        h2{
            font-size: 65px;
        }

        p{
            font-size: 35px;
        }
    }

    @media(min-width: 1366px){
        img{
            width: 300px;
            margin-right: 105px;
        }
    }

    @media(min-width: 1440px){
        justify-content: center;
        padding-top: 80px;
        img{
            width: 400px;
            margin-right: 135px;
            margin-left: 0px;
        }
    }

    @media(min-width: 1600px){
        img{
            width: 450px;
            margin-right: 135px;
        }

        h2{
            font-size: 82px;
        }

        p{
            font-size: 45px;
        }
    }
`

export const BoxNavegacao = styled.div`
    margin: 25px 0;

    h3{
        margin-bottom: 15px;
    }

    div{
        text-align: center;
    }

    @media(min-width: 600px){
        h3{
            font-size: 32px;
        }
    }

    @media(min-width: 600px){
        div{
            width: 500px;
        }
    }

    @media(min-width: 1280px){
        h3{
            font-size: 42px;
        }
    }

    @media(min-width: 1366px){
        div{
            width: 600px;
        }
    }

    @media(min-width: 1440px){
        div{
            width: 610px;
        }
    }
`