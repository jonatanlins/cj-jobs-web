import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useFormState } from 'react-use-form-state';
import api from '../services/api';

import Shell from '../components/Shell';
import Input from '../atoms/Input';

function Page({ history }) {
  const dispatch = useDispatch();
  const [formState, { text, email }] = useFormState();

  const handleSubscription = event => {
    event.preventDefault();
    dispatch({ type: 'SET_CONTRATANTE_DATA', data: formState.values });

    if (window.confirm('Você deseja salvar?')) {
      api.post('/contratantes', formState.values).then(response => {
        console.log(response);
        alert('Contratante cadastrado com sucesso!');
      });

      history.push('/');
    }
  };

  return (
    <Shell>
      <StyledWrapper>
        <form onSubmit={handleSubscription}>
          <h2>Adicionar contratante</h2>

          <Input label="Nome" {...text('nome')} required />
          <Input
            label="CNPJ"
            {...text('cnpj')}
            mask="99.999.999/9999-99"
            required
          />
          <Input
            label="Telefone"
            mask="(99) 999999999"
            {...text('telefone')}
            required
          />
          <Input label="Email" required {...email('email')} />

          <button>Inscrever-se</button>
        </form>
      </StyledWrapper>
    </Shell>
  );
}

const StyledWrapper = styled.div`
  h2 {
    font-weight: 400;
    font-size: 1.75em;
  }

  h3 {
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
