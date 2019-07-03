import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Board from '../components/Board';
import H1 from '../atoms/H1';

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
    <StyledWrapper>
      <H1>CJ Jobs</H1>

      <Link to="/jobs/new">Adicionar vaga</Link>

      <Board content={jobs} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0 10%;
`;

export default Page;
