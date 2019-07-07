import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useFormState } from 'react-use-form-state';

import Shell from '../components/Shell';
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
    <Shell>
      <StyledWrapper>
        <h2>{job.title}</h2>
        <h3>{job.company.name}</h3>
        <p>
          <b>Salário:</b> R$ {job.salary.toFixed(2).replace('.', ',')}
        </p>
        <p>
          <b>Carga horária:</b> {job.workload} horas semanais
        </p>
        <p>
          <b>Descrição:</b> {job.description}
        </p>

        <form onSubmit={handleSubscription}>
          <h2>Inscreva-se para essa vaga</h2>

          <Input label="Nome" {...text('name')} required />
          <Input label="CPF" {...text('cpf')} mask="999.999.999-99" required />
          <Input label="Data de nascimento" {...date('birthDate')} required />
          <Input
            label="Telefone"
            {...text('phone')}
            mask="(99) 999999999"
            required
          />
          <Input label="Email" {...email('email')} required />
          <Input
            label="Formação acadêmica"
            {...text('academicFormation')}
            multiline
            required
          />
          <Input
            label="Sua história"
            {...text('descriction')}
            multiline
            required
          />

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
