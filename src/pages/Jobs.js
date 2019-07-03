import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import List from '../atoms/List';
import ListItem from '../atoms/ListItem';
import H1 from '../atoms/H1';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';
import Paragraph from '../atoms/Paragraph';

function Page({ history, match }) {
  const jobs = useSelector(state =>
    state.jobs.data.filter(job => job.category === match.params.id)
  );

  const redirect = id => () => {
    history.push(`/jobs/${id}`);
  };

  return (
    <StyledWrapper>
      <H1>CJ Jobs</H1>

      <List>
        {jobs.map(({ id, title, company, description }) => (
          <ListItem key={id} onClick={redirect(id)}>
            <H2>{title}</H2>
            <H3>{company.name}</H3>
            <Paragraph>{description}</Paragraph>
          </ListItem>
        ))}
      </List>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0 10%;
`;

export default Page;
