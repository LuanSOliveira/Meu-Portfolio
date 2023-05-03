import styled from "styled-components";
import { backgroundColor } from "../../listas/StylesList";

export const Container = styled.div`
    padding: 10px 0px 0px 5px;

    h2{
        font-size: 24px;
        text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        margin-bottom: 10px;
    }
`

export const BoxProjetos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const InfoProjeto = styled.div`
    div{
        display: flex;
        .Voltar{
            width: 25px;
            height: 25px;
            margin-right: 15px;
            cursor: pointer;
        }
    }

    @media(min-width: 480px){
        div{
            .Voltar{
                width: 40px;
                height: 40px;
                margin-top: 5px;
            }
            .Titulo{
                font-size: 40px;
            }
        }
    }
`

export const BoxInformacoes = styled.div`
    flex-wrap: wrap;
    
    .SectionNavegacao{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 15px;

        .LogoProjeto{
            margin: 10px 0px;
            width: 310px;
            height: 182px;
            box-shadow: 0px 4px 4px 1px rgba(0,0,0,0.25);
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
            margin: 5px;
        }
    }

    .SectionInformacoes{
        div{
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 15px;

            h2{
                margin: 0;
            }

            p{
                text-align: justify;
                padding-right: 10px;
            }
        }
    }

    @media(min-width: 480px){
        .SectionNavegacao{
            .LogoProjeto{
                width: 390px;
                height: 225px;
            }
        }

        .SectionInformacoes{
            div{
                h2{
                    font-size: 30px;
                }
                p{
                    font-size: 20px;
                }
            }
        }
    }

    @media(min-width: 768px){
        .SectionNavegacao{
            .LogoProjeto{
                width: 450px;
                height: 250px;
                margin: 25px;
            }
        }

        .SectionInformacoes{
            div{
                h2{
                    font-size: 30px;
                }
                p{
                    font-size: 20px;
                }
            }
        }
    }

    @media(min-width: 834px){
        .SectionNavegacao{
            .LogoProjeto{
                width: 525px;
                height: 315px;
                margin: 25px;
            }
        }
    }

    @media(min-width: 1024px){
        .SectionNavegacao{
            width: 450px;
            margin-right: 45px;
            .LogoProjeto{
                width: 435px;
                height: 250px;
                margin: 25px;
            }
        }

        .SectionInformacoes{
            width: 500px;
        }
    }

    @media(min-width: 1280px){
        .SectionNavegacao{
            width: 490px;
            margin-right: 45px;
            .LogoProjeto{
                width: 480px;
                height: 260px;
                margin: 25px;
            }

            button{
                width: 200px;
                height: 50px;
                font-size: 25px;
            }
        }

        .SectionInformacoes{
            width: 800px;

            div{
                h2{
                    font-size: 45px;
                }
                p{
                    font-size: 32px;
                    margin-bottom: 25px;
                }
            }
        }
    }

    @media(min-width: 1600px){
        .SectionNavegacao{
            width: 600px;
            margin-right: 45px;
            .LogoProjeto{
                width: 520px;
                height: 300px;
                margin: 25px;
            }
        }

        .SectionInformacoes{
            width: 900px;
        }
    }

    @media(min-width: 1920px){
        margin-top: 50px;
        .SectionNavegacao{
            width: 700px;
            margin-right: 45px;
            .LogoProjeto{
                width: 520px;
                height: 300px;
                margin: 25px;
            }
        }

        .SectionInformacoes{
            width: 1024px;
        }
    }

`

export const BoxItens = styled.div`
    width: 350px;
    justify-content: center;
    img{
        background: ${backgroundColor[2]};
        width: 25px;
        padding: 10px;
        margin: 8px;
        border: none;
        border-radius: 20px;
        box-shadow: 1px 4px 4px 0px rgba(0,0,0,0.25);
    }

    @media(min-width: 768px){
        width: 500px;
        justify-content: left;
        margin-top: 5px;
        img{
            width: 45px;
        }
    }

    @media(min-width: 834px){
        width: 100%;
    }
`