import React from 'react';
import { Box } from 'elements';
import Menu from '../Menu';
import {
  Container,
  StyledLogo,
  Tagline,
} from './Header.styles';

const Header = () => (
  <Box wrapper styles="position: relative">
    <Menu />
    <Container>
      <StyledLogo />
      <Tagline>Product & Design</Tagline>
    </Container>
  </Box>
);

export default Header;
