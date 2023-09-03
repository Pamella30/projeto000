import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

  const continentes = [

    {
      nome: 'Amarelo',
      corPrimaria: '#FFFFE0',
      corSecundaria: '#ffdf00'
    },

    {
      nome: 'Azul',
      corPrimaria: '#0000CD',
      corSecundaria: '#002776'
    },

    {
      nome: 'Verde',
      corPrimaria: '#3CB371',
      corSecundaria: '#009c3b'
    },

    {
      nome: 'Branco',
      corPrimaria: '#FFFAFA',
      corSecundaria: '#ffffff'
    },

    {
      nome: 'Laranja',
      corPrimaria: '#FFA500',
      corSecundaria: '#FF8C00'
    }
]

const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario continentes={continentes.map(continente => continente.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {continentes.map(continente => <Time 
        key={continente.nome}  
        nome={continente.nome} 
        corPrimaria={continente.corPrimaria} 
        corSecundaria={continente.corSecundaria}
        colaboradores={colaboradores}
      />)}
    </div>
  );
}

export default App;
