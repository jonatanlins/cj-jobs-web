import React from 'react';
import styled from 'styled-components';
import { useFormState } from 'react-use-form-state';
import { useSelector } from 'react-redux';

import Input from '../atoms/Input';
import Shell from '../components/Shell';
import api from '../services/api';

function Page({ history }) {
  const [formState, { text, number, select }] = useFormState();

  const contratantes = useSelector(state => state.contratantes);

  const handleSubmit = event => {
    event.preventDefault();

    if (window.confirm('Você deseja salvar?')) {
      api.post('/vagas', formState.values).then(() => {
        alert('Vaga cadastrada com sucesso!');
      });

      history.push('/');
    }
  };

  return (
    <Shell>
      <StyledWrapper>
        <h1>Cadastrar nova vaga</h1>

        <form onSubmit={handleSubmit}>
          <Input label="Título" required {...text('nome')} />
          <select {...select('cnpj')}>
            {contratantes.map(({ nome, cnpj }) => (
              <option value={cnpj}>{nome}</option>
            ))}
          </select>
          <Input label="Descrição da vaga" required {...text('descricao')} />
          <Input label="Salário" required {...number('salario')} />
          <Input
            label="Carga horária semanal"
            required
            {...number('cargaHoraria')}
          />

          <button>Cadastrar</button>
        </form>
      </StyledWrapper>
    </Shell>
  );
}

const StyledWrapper = styled.div`
  h1 {
    font-weight: 400;
    font-size: 1.75em;
  }

  h2 {
    color: #123b72;
    margin: 1em 0 1.5em;
    font-weight: 700;
    line-height: 150%;
  }

  button {
    cursor: pointer;
    background-color: #123b72;
    color: white;
    line-height: 3;
    padding: 0 2em;
    text-transform: uppercase;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    box-shadow: none;
  }

  form {
    max-width: 30em;
  }
`;

export default Page;
