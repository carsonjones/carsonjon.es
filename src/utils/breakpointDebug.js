import React from 'react';
import styled from 'styled-components';
import useWindowWidth from './useWindowWidth';
import selectBreakPoint from './selectBreakpoint';

const { NODE_ENV } = process.env;

const Tag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 24px;
  width: 64px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: pink; 
  color: white;
  text-shadow: 0px 0px 4px #000;
  z-index: 999;
  &:before {
    content: ${props => `'${selectBreakPoint(props.width)}:${props.width}'`};
  }
`;

const BreakPointDebugger = () => {
  if (NODE_ENV === 'production') return null;
  const width = useWindowWidth();
  return (
    <Tag width={width} />
  );
}

export default BreakPointDebugger;
