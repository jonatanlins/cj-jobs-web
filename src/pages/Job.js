import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useFormState } from 'react-use-form-state';

import H1 from '../atoms/H1';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

function Page({ match, history }) {
  const [formState, { text, date, email }] = useFormState();

  const job = useSelector(state =>
    state.jobs.data.find(job => job.id === match.params.id)
  );

  const handleSubscription = event => {
    event.preventDefault();

    if (window.confirm('Você deseja enviar?')) {
      alert('Envio relizado com sucesso');
      history.push('/');
    }
  };

  return (
    <StyledWrapper>
      <H1>CJ Jobs</H1>

      <H2>{job.title}</H2>
      <H3>{job.company.name}</H3>
      <Paragraph>{job.description}</Paragraph>

      <form onSubmit={handleSubscription}>
        <H2>Inscreva-se</H2>

        <Input label="Nome" {...text('name')} />
        <Input label="CPF" {...text('cpf')} />
        <Input label="Data de nascimento" {...date('birthDate')} />
        <Input label="Telefone" {...text('phone')} />
        <Input label="Email" {...email('email')} />
        <Input label="Formação acadêmica" {...text('academicFormation')} />
        <Input label="Sua história" {...text('descriction')} />

        <Button>Enviar</Button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0 10%;
`;

export default Page;
