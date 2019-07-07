import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Shell from '../components/Shell';
import Board from '../components/Board';

function Page() {
  const jobs = useSelector(state => [
    ...state.jobs.data
      .slice(0, 4)
      .map(job => ({ ...job, to: '/jobs/' + job.id })),
    {
      id: 'kkkkkkkolokinhomeu',
      title: 'Ver todas as vagas',
      company: { name: '...' },
      to: '/jobs',
    },
  ]);

  return (
    <Shell>
      <StyledWrapper>
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
      margin-right: 1em;
    }

    a {
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
