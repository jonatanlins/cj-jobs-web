import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import List from '../atoms/List';
import H1 from '../atoms/H1';
import H3 from '../atoms/H3';
import Paragraph from '../atoms/Paragraph';
import Spacer from '../atoms/Spacer';
import Span from '../atoms/Span';
import Card from '../atoms/Card';

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

      <List links dividers>
        {jobs.map(({ id, title, company, description }) => (
          <li key={id} onClick={redirect(id)}>
            <Card>
              <H3>
                {title}
                <Spacer width="0.5em" />
                <Span lighter>{company.name}</Span>
              </H3>
              <Paragraph>{description}</Paragraph>
            </Card>
          </li>
        ))}
      </List>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0 10%;
`;

export default Page;
