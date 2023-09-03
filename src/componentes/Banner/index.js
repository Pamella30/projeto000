import './Banner.css'

function Banner() {
    return (
        <header className='banner'>
           <img src="/imagens/banner.jpg"/>
        </header>
        
    )
}

export default Banner

/*Foi criado o componente Banner com o arquivo index.js e Banner.css
index.js para a funcao
Banner.css para a estilizacao

Dentro do arquivo index.js tem a funcao Banner que vai retornar a imagem do banner

Dentro da tag header foi criada a className banner para poder estilizar
Dentro da tag img foi chamada a imagem 

O componente Banner foi exportado para o App.js
O arquivo Banner.css foi importado no arquivo index.js*/