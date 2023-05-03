import { BoxInformacao, Container } from "./ContatosContainerStyles"

const ContatosContainer = () => {

    function AbrirPdf (): void{
        window.open('../../../doc.pdf', 'blank')
    }

    return(
        <Container>
            <img src="../../../public/Avatar3.png" alt="Avatar" className="Imagem" data-aos="zoom-in-down"/>
            <div data-aos="fade-down">
                <BoxInformacao>
                    <h2>E-mail:</h2>
                    <p>l.u.a.n@hotmail.com</p>
                </BoxInformacao>
                <BoxInformacao>
                    <h2>Telefone/WhatsApp:</h2>
                    <p>{"+55 (85) 98547-9902"}</p>
                </BoxInformacao>
                <BoxInformacao>
                    <h2>Minhas Redes:</h2>
                    <div>
                        <a href="https://www.linkedin.com/in/luan-santos-oliveira-4b2a011a3/" target="blank">
                            <img src="https://img.icons8.com/stickers/100/null/linkedin-circled.png" alt="Icon Linkedin" />
                        </a>
                        <a href="https://github.com/LuanSOliveira" target="blank">
                            <img src="https://img.icons8.com/stickers/100/null/github.png" alt="Icon Github" />
                        </a>
                    </div>
                    <button onClick={AbrirPdf}>Currículo PDF</button>
                </BoxInformacao>
            </div>
        </Container>
    )
}

export default ContatosContainer