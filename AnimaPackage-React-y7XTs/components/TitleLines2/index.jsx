import React from "react";
import styled from "styled-components";
import { Headingh3 } from "../../styledMixins";


function TitleLines2(props) {
  const { children } = props;

  return (
    <TitleLines>
      <Login>{children}</Login>
    </TitleLines>
  );
}

const TitleLines = styled.div`
  height: 42px;
  display: flex;
  padding: 0 24px;
  align-items: flex-start;
  min-width: 375px;
`;

const Login = styled.h1`
  ${Headingh3}
  width: 327px;
  min-height: 42px;
  font-weight: 700;
  color: var(--inkink-01);
  text-align: center;
  line-height: 42px;
  white-space: nowrap;
`;

const TitleLines1 = styled.div`
  height: 42px;
  display: flex;
  padding: 0 24px;
  align-items: flex-start;
  min-width: 375px;
`;

const Login1 = styled.div`
  ${Headingh3}
  width: 327px;
  min-height: 42px;
  font-weight: 700;
  color: var(--inkink-01);
  text-align: center;
  line-height: 42px;
  white-space: nowrap;
`;

export default TitleLines2;
