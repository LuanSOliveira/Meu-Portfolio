import styled from "styled-components";

export const Container = styled.div`
    padding: 10px 0px 0px 5px;

    img{
        width: 200px;
        position: absolute;
        bottom: 0px;
        right: 0px;
    }

    h2{
        font-size: 36px;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        margin-bottom: 5px;
    }

    p{
        font-size: 20px;
        padding: 0 10px 0 0;
        text-align: justify;
    }

    @media(min-width: 414px){
        img{
            width: 240px;
        }
        h2{
            font-size: 40px;
        }
        p{
            font-size: 22px;
        }
    }

    @media(min-width: 600px){
        img{
            width: 280px;
        }
        h2{
            font-size: 45px;
        }
        p{
            font-size: 28px;
        }
    }

    @media(min-width: 800px){
        img{
            width: 360px;
        }
        h2{
            font-size: 50px;
        }
        p{
            font-size: 32px;
        }
    }

    @media(min-width: 1024px){
        display: flex;
        padding-top: 25px;
        img{
            width: 280px;
            position: static;
            margin-right: 25px;
        }
        h2{
            font-size: 50px;
        }
        p{
            font-size: 32px;
            padding-right: 25px;
        }
    }

    @media(min-width: 1280px){
        padding-top: 42px;
        img{
            width: 295px;
        }
    }

    @media(min-width: 1366px){
        img{
            width: 350px;
        }
        h2{
            font-size: 62px;
        }
        p{
            font-size: 36px;
        }
    }

    @media(min-width: 1600px){
        padding-top: 68px;
        img{
            width: 390px;
        }
        h2{
            font-size: 75px;
        }
        p{
            font-size: 46px;
            padding-right: 35px;
        }
    }
`