import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Shell from '../components/Shell';

function Page() {
  const contratantes = useSelector(state => state.contratantes);

  return (
    <Shell>
      <StyledWrapper>
        <div className="row">
          <h1>Contratantes</h1>

          <Link to="/contratantes/new">Adicionar novo</Link>
        </div>

        <ul>
          {contratantes.map(({ cnpj, nome, email, telefone }) => (
            <li key={cnpj}>
              <h3>{nome}</h3>
              <p>
                <b>CNPJ:</b> {cnpj}
              </p>
              <p>
                <b>Email:</b> {email}
              </p>
              <p>
                <b>Telefone</b> {telefone}
              </p>
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

  .row {
    line-height: 3;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: space-between;

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
