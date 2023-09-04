import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

  const equipes = [

    {
      nome: 'Amarelo',
      corPrimaria: '#FFFFE0',
      corSecundaria: '#ffdf00'
    },

    {
      nome: 'Azul',
      corPrimaria: '#002776',
      corSecundaria: '#0000CD'
    },

    {
      nome: 'Verde',
      corPrimaria: '#3CB371',
      corSecundaria: '#009c3b'
    },

      {
      nome: 'Branco',
      corPrimaria: '#F5F5F5',
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
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario equipes={equipes.map(equipe=> equipe.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {equipes.map(equipe => <Time 
        key={equipe.nome}  
        nome={equipe.nome} 
        corPrimaria={equipe.corPrimaria} 
        corSecundaria={equipe.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipe === equipe.nome)}

      />)}
    </div>
  );
}

export default App;
