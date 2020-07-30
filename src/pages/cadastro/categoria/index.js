import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pagedefault';
import FormField from '../../../components/formfield';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    setValue( 
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
      );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais);
      }}>

      <FormField
        label="Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />

        {/* <div>
          <label>
            Nome da Categoria:
            <input
              type="text" 
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />
          </label>
        </div> */}

        <div>
          <label>
            Descrição:
            <textarea
              type="text" 
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text" 
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div> */}

      <FormField
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
      />

        {/* <div>
          <label>
            Cor:
            <input 
              type="color" 
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;