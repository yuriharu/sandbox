import React, { Component } from "react";
import styled, { css } from "styled-components";

function Line1(props) {
  return (
    <Container {...props}>
      <svg
        viewBox="-0.5 -0.5 204 3"
        style={{
          height: 1,
          width: 202
        }}
      >
        <path
          strokeWidth={1}
          fill="transparent"
          stroke="rgba(255,117,57,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.00 L202.00 0.00 "
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

export default Line1;
