import React from 'react';
import styled from 'styled-components';
import { Page } from 'layout';
import { theme } from 'styles';
import * as S from './home/Home.styles';

const Home = () => {
  return (
    <Page>
      <S.Main>
        <S.Hero>
          <S.HeroMain>
            Hello
          </S.HeroMain>
          <S.Background />
        </S.Hero>
      </S.Main>
    </Page>
  );
};

export default Home;
