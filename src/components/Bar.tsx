import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #06198B;
  margin: 0;
  position: sticky;
  padding 0 10px;
  top: 71px;
  width: 100%;
  z-index: 39;
`;

const Bar = ({ children, title }) => (
  <Wrapper className="columns is-mobile">
    <div className="column">
      <h1 className="subtitle has-text-white is-size-4">{title}</h1>
    </div>
    <div className="column">
      {children}
    </div>
  </Wrapper>
);

export default Bar;
