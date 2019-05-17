import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  display: flex;
  justify-content: center;

  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: rgba(200, 200, 200, 0.7);
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 6px;
      height: 51px;
    }
    50%,
    100% {
      top: 19px;
      height: 26px;
    }
  }
`;

export default () => (
  <Loader>
    <div className="lds-facebook">
      <div />
      <div />
      <div />
    </div>
  </Loader>
);
