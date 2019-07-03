import React from 'react';
import styled from 'styled-components';
import { useFormState } from 'react-use-form-state';

import H1 from '../atoms/H1';
import H2 from '../atoms/H2';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

function Page({ history }) {
  const [formState, { text, number }] = useFormState();

  const handleSubmit = event => {
    event.preventDefault();

    if (window.confirm('Você deseja salvar?')) {
      alert('Vaga cadastrada com sucesso!');
      history.push('/');
    }
  };

  return (
    <StyledWrapper>
      <H1>CJ Jobs</H1>

      <form onSubmit={handleSubmit}>
        <H2>Cadastrar nova vaga</H2>

        <Input label="Título" {...text('title')} />
        <Input label="Empresa" {...text('company')} />
        <Input label="Descrição da vaga" {...text('description')} />
        <Input label="Salário" {...number('salary')} />
        <Input label="Carga horária semanal" {...number('workload')} />

        <Button>Enviar</Button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0 10%;
`;

export default Page;
