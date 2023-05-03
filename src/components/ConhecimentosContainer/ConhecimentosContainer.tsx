import { useState } from "react"
import { IConhecimentos, Tipos } from "../../interfaces/Interfaces"
import { listaConhecimentos } from "../../listas/ConhecimentosList"
import { BoxDescricao, BoxFiltro, BoxTecnologia, Container, TextoDescricao } from "./ConhecimentosContainerStyles"

const ConhecimentosContainer = () => {
    const [lista, setLista] = useState<IConhecimentos[]>(listaConhecimentos)
    const [itemSelecionado, setItemSelecionado] = useState<IConhecimentos>({
        id: 0,
        nome: '',
        imagem: '',
        descricao: '',
        tipo: 'front',
        fonte: '22'
    })

    function Filtrar(tipo:Tipos): void {
        setLista(listaConhecimentos.filter((item) => item.tipo === tipo))
        setItemSelecionado({id: 0, nome: '', imagem: '', descricao: '', tipo: 'front', fonte: '22'})
    }

    function ListarTodos():void{
        setLista(listaConhecimentos)
        setItemSelecionado({id: 0, nome: '', imagem: '', descricao: '', tipo: 'front', fonte: '22'})
    }

    function SelecionaItem(indice:number):void{
        setItemSelecionado(listaConhecimentos[indice])
    }

    function FecharInformacao():void{
        setItemSelecionado({id: 0, nome: '', imagem: '', descricao: '', tipo: 'front', fonte: '22'})
    }
    
    return(
        <Container>
            <h2 className="TextoIndicacao" data-aos="fade-down">Selecione uma tecnologia:</h2>
            <BoxFiltro data-aos="fade-down">
                <button onClick={ListarTodos}>Todos</button>
                <button onClick={() => Filtrar('front')}>Front-End</button>
                <button onClick={() => Filtrar('back')}>Back-End</button>
                <button onClick={() => Filtrar('mobile')}>Mobile</button>
            </BoxFiltro>
            <BoxTecnologia>
                <section className="ListaTecnologias">
                    <div className="BoxLista" data-aos="fade-up">
                        {
                            lista.map(
                                (item) => <img key={item.id} src={item.imagem} alt={`Icon ${item.nome}`} onClick={() => SelecionaItem(item.id)} />
                            )
                        }
                    </div>
                    {
                        (itemSelecionado.nome && window.innerWidth < 600) &&
                            <BoxDescricao>
                                <div className="BoxInformacao" data-aos="zoom-in">
                                    <div>
                                        <img src="https://img.icons8.com/office/30/null/cancel.png" alt="Icon fechar janela" onClick={FecharInformacao}/>
                                    </div>
                                    <h2>{itemSelecionado.nome}</h2>
                                    <TextoDescricao tamanho={itemSelecionado.fonte}>{itemSelecionado.descricao}</TextoDescricao>
                                </div>
                            </BoxDescricao>
                    }
                </section>
                {
                    (window.innerWidth >= 600) &&
                        <section className="BoxDescricao">
                            <h2>{itemSelecionado.nome}</h2>
                            <p>{itemSelecionado.descricao}</p>
                        </section>
                }
            </BoxTecnologia>
        </Container>
    )
}

export default ConhecimentosContainer