import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import StickPaper from '../atoms/StickPaper';

function Board({ content, history }) {
  const redirect = to => () => {
    history.push(to);
  };

  return (
    <styles.Frame>
      <styles.Background>
        {content.map(({ id, title, company, to }, index) => (
          <styles.StickPaper
            key={id}
            className={`i-${index}`}
            onClick={redirect(to)}
          >
            <p>{title}</p>
            <p>{company.name}</p>
          </styles.StickPaper>
        ))}
      </styles.Background>
    </styles.Frame>
  );
}

const styles = {
  Frame: styled.div`
    background-color: #b47731;
    padding: 1em;
  `,

  Background: styled.div`
    background-color: #193b1b;
    height: 26em;
    position: relative;
  `,

  StickPaper: styled(StickPaper)`
    position: absolute;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;

    &:hover {
      box-shadow: 0px 8px 12px -3px rgba(0, 0, 0, 0.5);
    }

    &.i-0 {
      top: 4em;
      left: 32em;
      transform: rotate(${Math.random() * 20 - 10}deg);
      background-color: lightblue;
    }
    &.i-1 {
      top: 5em;
      left: 18em;
      transform: rotate(${Math.random() * 20 - 10}deg);
    }
    &.i-2 {
      top: 15em;
      left: 26em;
      transform: rotate(${Math.random() * 20 - 10}deg);
    }
    &.i-3 {
      top: 3em;
      left: 3em;
      transform: rotate(${Math.random() * 20 - 10}deg);
      background-color: lightgreen;
    }
    &.i-4 {
      top: 16em;
      left: 10em;
      transform: rotate(${Math.random() * 20 - 10}deg);
      background-color: pink;
    }
  `,
};

export default withRouter(Board);
