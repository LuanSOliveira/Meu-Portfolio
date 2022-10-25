const Botao = (props) => {

    return(
        <>
            <button className={props.nomeClasse} disabled={props.ativacao}>{props.nome}</button>
        </>
    )
}

export default Botao;