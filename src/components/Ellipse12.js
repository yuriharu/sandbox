import React, { Component } from "react";
import styled, { css } from "styled-components";

function Ellipse12(props) {
  return (
    <Container {...props}>
      <svg
        viewBox="0 0 50 50"
        style={{
          height: 50,
          width: 50
        }}
      >
        <path
          strokeWidth={0}
          fill="rgba(255,117,57,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M25.00 50.00 C38.81 50.00 50.00 38.81 50.00 25.00 C50.00 11.19 38.81 0.00 25.00 0.00 C11.19 0.00 0.00 11.19 0.00 25.00 C0.00 38.81 11.19 50.00 25.00 50.00 Z"
        ></path>
      </svg>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  top: 0px;
  left: 0px;
  flex-direction: column;
`;

export default Ellipse12;
