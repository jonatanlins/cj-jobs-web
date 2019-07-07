import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import logo from '../assets/images/logo.png';

function Shell({ history, children }) {
  const redirect = to => () => {
    history.push(to);
  };

  return (
    <styles.Wrapper>
      <styles.Header>
        <img src={logo} onClick={redirect('/')} alt="Logotipo CJ Jobs" />
      </styles.Header>

      <styles.Main>{children}</styles.Main>
    </styles.Wrapper>
  );
}

const styles = {
  Wrapper: styled.div``,

  Header: styled.header`
    background-color: white;
    height: 4em;
    padding: 0.5em 10%;
    box-sizing: border-box;

    img {
      cursor: pointer;
      max-height: 100%;
      max-width: 100%;
    }
  `,

  Main: styled.div`
    padding: 0 10% 8em;
  `,
};

export default withRouter(Shell);
