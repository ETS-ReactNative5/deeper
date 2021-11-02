import React from "react";
import styled from "styled-components";
import { Headingh5, Headingh3 } from "../../styledMixins";


function TitleLines(props) {
  const { welcomeBack, login } = props;

  return (
    <TitleLines1>
      <WelcomeBack>{welcomeBack}</WelcomeBack>
      <Login>{login}</Login>
    </TitleLines1>
  );
}

const TitleLines1 = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 72px;
`;

const WelcomeBack = styled.div`
  ${Headingh5}
  width: 327px;
  min-height: 26px;
  font-weight: 700;
  color: var(--inkink-01);
  text-align: center;
  line-height: 26px;
  white-space: nowrap;
`;

const Login = styled.div`
  ${Headingh3}
  width: 327px;
  min-height: 42px;
  margin-top: 4px;
  font-weight: 700;
  color: var(--inkink-01);
  text-align: center;
  line-height: 42px;
  white-space: nowrap;
`;

export default TitleLines;
