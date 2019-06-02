import React, { Component, Fragment } from 'react';
import { Transition } from 'react-transition-group';
import { Text } from 'elements';
import {
  Container,
  Control,
  Nav,
  Option,
} from './Menu.styles';

class Menu extends Component {
  state = {
    isOpen: false,
  };

  toggleMenuOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Control
          onClick={this.toggleMenuOpen}
          isMenuOpen={isOpen}
        >
          {isOpen ? 'Close' : 'Menu'}
        </Control>
        <Transition
          key="menu"
          timeout={200}
          in={isOpen}
        >
        {status => (
          <Container
            isMenuOpen={isOpen}
            className={`menu-${status}`}
          >
            <Nav>
              <Option>Blog</Option>
              <Option>Sandbox</Option>
              <Option>Gifs</Option>
            </Nav>
          </Container>
        )}
        </Transition>
      </Fragment>
    );
  }
}

export default Menu;
