import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Shell from '../components/Shell';
import Board from '../components/Board';

function Page() {
  const contratantes = useSelector(state => state.contratantes);

  const jobs = useSelector(state => {
    return [
      ...state.jobs.slice(0, 4).map(job => {
        const company = state.contratantes.find(c => c.cnpj === job.cnpj);

        return {
          ...job,
          to: '/jobs/' + job.id,
          company: (company && company.nome) || '...',
        };
      }),
      {
        id: 'kkkkkkkolokinhomeu',
        nome: 'Ver todas as vagas',
        company: '...',
        to: '/jobs',
      },
    ];
  });

  return (
    <Shell>
      <StyledWrapper>
        <div className="row">
          <div />
          <Link to="/contratantes">Contratantes</Link>
        </div>

        <Board content={jobs} className="board" />

        <div className="row">
          <span>Você tem uma empresa?</span>
          <Link to="/jobs/new">Publique uma vaga</Link>
        </div>
      </StyledWrapper>
    </Shell>
  );
}

const StyledWrapper = styled.div`
  .board {
    margin: 2em 0;
  }

  .row {
    line-height: 3;
    text-align: center;

    span {
      font-size: 1.5em;
    }

    a {
      margin-left: 1em;
      font-size: 1em;
      cursor: pointer;
      background-color: #123b72;
      color: white;
      padding: 0 2em;
      text-transform: uppercase;
      border: none;
      border-radius: 4px;
      box-shadow: none;
      text-decoration: none;
      display: inline-block;
    }
  }
`;

export default Page;
