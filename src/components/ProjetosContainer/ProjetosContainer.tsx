import { useContext } from "react"
import { listaProjetos } from "../../listas/ProjetosList"
import CardProjeto from "../CardProjeto/CardProjeto"
import { BoxInformacoes, BoxItens, BoxProjetos, Container, InfoProjeto } from "./ProjetosContainerStyles"
import { AppContext } from "../../context/context"

const ProjetosContainer = () => {
    const {projetoSelecionado, setProjetoSelecionado} = useContext(AppContext)

    function VoltarParaLista():void{
        setProjetoSelecionado({id: 0, nome: '', descricao: '', imagem: '', url: '', git: '', tecnologias: []})
    }

    return(
        <Container>
            {(projetoSelecionado.nome === '') && <h2 data-aos="fade-up">Selecione um projeto para mais informações:</h2>} 
            {
                (projetoSelecionado.nome === '') 
                ?
                    <BoxProjetos data-aos="fade-up">
                        {
                            listaProjetos.map(
                                (projeto) => <CardProjeto key={projeto.id} nome={projeto.nome} id={projeto.id} imagem={projeto.imagem}/>
                            )
                        }
                    </BoxProjetos>
                :
                    <InfoProjeto data-aos="flip-left">
                        <div>
                            <img src="https://img.icons8.com/flat-round/64/null/back--v1.png" alt="Icon Voltar" onClick={VoltarParaLista} className="Voltar" />
                            <h2 className="Titulo">{projetoSelecionado.nome}</h2>
                        </div>
                        <BoxInformacoes>
                            <section className="SectionNavegacao">
                                <img src={projetoSelecionado.imagem} alt="Imagem do Projeto" className="LogoProjeto" />
                                <div>
                                    <a href={projetoSelecionado.git} target="blanck">
                                        <button>Repositório</button>
                                    </a>
                                    <a href={projetoSelecionado.url} target="blanck">
                                        <button>Testar Projeto</button>
                                    </a>
                                </div>
                            </section>
                            <section className="SectionInformacoes">
                                <div>
                                    <h2>Descrição:</h2>
                                    <p>{projetoSelecionado.descricao}</p>
                                </div>
                                <div>
                                    <h2>Tecnologias Utilizadas:</h2>
                                    <BoxItens>
                                        {
                                            projetoSelecionado.tecnologias.map((item) =>
                                                <img key={item.id} src={item.imagem} alt={`Icon ${item.nome}`} />
                                            )
                                        }
                                    </BoxItens>
                                </div>
                            </section>
                        </BoxInformacoes>
                    </InfoProjeto>
            }
        </Container>
    )
}

export default ProjetosContainer