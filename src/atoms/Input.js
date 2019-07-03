import React from 'react';
import styled from 'styled-components';

function Atom({ label, ...props }) {
  return (
    <StyledWrapper>
      <span>{label}</span>
      <input {...props} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.label``;

export default Atom;
