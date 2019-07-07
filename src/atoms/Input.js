import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

function Atom({ label, multiline, ...props }) {
  return (
    <StyledWrapper>
      <span>
        {label} {props.required && ' *'}
      </span>

      {props.mask ? (
        <InputMask {...props} />
      ) : multiline ? (
        <textarea {...props} />
      ) : (
        <input {...props} />
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  span {
    color: #555;
  }

  input,
  textarea {
    border: 1px solid #555;
    font-size: 1em;
    line-height: 2;
    padding: 0 1em;
    border-radius: 4px;
  }
`;

export default Atom;
