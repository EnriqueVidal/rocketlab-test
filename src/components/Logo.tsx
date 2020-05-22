import * as React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Wrapper = styled.div`
  height: 71px;
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
`;

const Image = styled.img`
  display: flex;
  margin: 0 auto;
`;

const Logo = () => (
  <Wrapper>
    <Image alt="Crunch Accounting" src={logo} />
  </Wrapper>
);

export default Logo;
