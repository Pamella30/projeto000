import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [equipe, setEquipe] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            funcao,
            imagem,
            equipe
        })
        setNome('')
        setFuncao('')
        setImagem('')
        setEquipe('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card:</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Funcao" 
                    placeholder="Digite a funcao"
                    valor={funcao} 
                    aoAlterado={valor => setFuncao(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereco da imagem"
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Equipe"
                    obrigatorio={true} 
                    itens={props.equipes}
                    valor={equipe} 
                    aoAlterado={valor => setEquipe(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
} 



export default Formulario

/*O campo texto tem que ficar dentro do formulario entao tiramos ele do arquivo app.js e trazemos ele pro formulario
O formulario e chamado no arquivo app.js
Com "Ctrl + Espaço" nós importamos o componente que a seta do mouse tiver em cima

-----Foi criada uma funcao aoSalvar para retornar para uma constante o evento do clique no botao
Essa funcao eh chamada dentro do form*/