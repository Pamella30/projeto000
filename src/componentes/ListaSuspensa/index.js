import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} 
            required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}</select>
        </div>
    )
}

export default ListaSuspensa

/*O map percorre a lista faz algo e devolve uma nova lista transformada.
Para cada item da lista ele vai retornar um array novo manipulado. É como se tívessemos uma lista de nomes e vamos trasnformá-la em uma lista de options: ele vai percorrer, mas vai retornar algo diferente. 

Essa lista suspensa vai ser chamada no formulario
No formulario foi criado um array times
Esses times foram passados dentro do componente ListaSuspensa como itens recebendo os continentes como propriedade
No select da lista suspensa o itens foi acessado pelo map que vai devolver cada item como uma opcao


Criei uma constante chamada continentes dentro do componenete formulario
Peguei estes continentes e joguei dentro de itens (La na lista suspensa)
Acessei esses itens atraves do map para que me devolvesse um novo array em forma de opcao*/