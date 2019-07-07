import React from 'react';
import styled from 'styled-components';

function Atom({ links, dividers, ...props }) {
  const className = [links ? 'links' : '', dividers ? 'dividers' : ''].join(
    ' '
  );

  return <StyledAtom className={className} {...props} />;
}

export const StyledAtom = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  > li {
    overflow: hidden;
    transition: all 0.2s ease;
    padding: 0 1em;

    &:not(:last-child) {
      margin-bottom: ${props => props.gap || 0}em;
    }
  }

  &.dividers li:not(:last-child) {
    border-bottom: 1px solid #aaa;
  }

  &.links li:hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

export default React.memo(Atom);
