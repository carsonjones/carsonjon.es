import React, { Component, Fragment } from 'react';
import { Text } from 'elements';
import {
  Container,
  Control,
} from './Menu.styles';

class Menu extends Component {
  state = {
    isOpen: false,
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Control>
          Menu
        </Control>
        <Container
          isMenuOpen={isOpen}
        >
          <div>yo</div>
        </Container>
      </Fragment>
    );
  }
}

export default Menu;
