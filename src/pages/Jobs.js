import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Shell from '../components/Shell';

function Page({ history, match }) {
  const jobs = useSelector(state =>
    state.jobs.data.filter(job => job.category === match.params.id)
  );

  const redirect = id => () => {
    history.push(`/jobs/${id}`);
  };

  return (
    <Shell>
      <StyledWrapper>
        <h1>Todas as vagas de emprego</h1>

        <ul>
          {jobs.map(({ id, title, company, description, salary, workload }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>
                <b>Empresa:</b> {company.name}
              </p>
              <p>
                <b>Salário:</b> R$ {salary.toFixed(2).replace('.', ',')}
              </p>
              <p>
                <b>Carga horária:</b> {workload} horas semanais
              </p>
              <p>
                <b>Descrição:</b> {description}
              </p>

              <button onClick={redirect(id)}>candidatar-me</button>
            </li>
          ))}
        </ul>
      </StyledWrapper>
    </Shell>
  );
}

const StyledWrapper = styled.div`
  h1 {
    font-weight: 400;
    font-size: 1.75em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 16px;
      padding: 32px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.13);

      h3 {
        color: #123b72;
        margin: 0;
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
    }
  }
`;

export default Page;
