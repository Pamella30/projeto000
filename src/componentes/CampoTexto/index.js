import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    } 

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
} 

export default CampoTexto

/*Foi criado o componente CampoTexto com os arquivos index.js e o CampoTexto.css
index.js para a funcao
CampoTexto.css para a estlizacao

Dentro da CampoTexto esta retornando uma div, label e um input
div com className para poder estilizar
label que sera a etiqueta do campo ou seja o nome que aparecera em cima do campo
input que sera onde o usario ira digitar, dentro do input tem o placeholder que e a mensagem com a sujestao do que se deve ser digitado dentro daquele campo

Para cada campo foi criado uma label entao o componente foi chamado 3x no arquivo app.js.
Em "App.js" colocamos um label de Nome, Cargo e Imagem e foi isso o que recebemos nas props: um objeto JavaScript com uma propriedade label que vem com o valor que foi passado. Ou seja, conseguimos passar o parâmetro para o componente.

------
onChange escuta o evento
value coloca o valor
*/
