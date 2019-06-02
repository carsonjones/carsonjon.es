import React from 'react';
import styled from 'styled-components';
import { Page } from 'layout';
import { Text } from 'elements';
import { theme } from 'styles';
import * as S from 'components/home/Home.styles';
import { Header } from 'components';

const Home = () => {
  return (
    <Page>
      <S.Main>
        <S.Hero><Header /></S.Hero>
        <S.Background />
      </S.Main>
    </Page>
  );
};

export default Home;
