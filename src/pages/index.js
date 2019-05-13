import React from 'react';
import styled from 'styled-components';
import { Page } from 'layout';
import { theme } from 'styles';

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;

const Home = ({ }) => {
  return (
    <Page>
      <Main>

      </Main>
    </Page>
  );
};

export default () => <Page>Hello world!</Page>
