import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonLight(props) {
  return (
    <Container {...props}>
      <Next>Next</Next>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #EFEFF4;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Next = styled.span`
  font-family: Roboto;
  color: #000;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
`;

export default CupertinoButtonLight;
