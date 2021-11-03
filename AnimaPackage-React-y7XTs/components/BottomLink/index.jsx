import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paragraphp2 } from "../../styledMixins";


function BottomLink(props) {
  const { dontHaveAnAccoun, signUp, className } = props;

  return (
    <Link to="/login">
      <BottomLink1 className={`bottom-link ${className || ""}`}>
        <DontHaveAnAccoun className="dont-have-an-accoun">{dontHaveAnAccoun}</DontHaveAnAccoun>
        <SignUp className="sign-up-1">{signUp}</SignUp>
      </BottomLink1>
    </Link>
  );
}

const BottomLink1 = styled.div`
  ${Paragraphp2}
  height: 21px;
  margin-top: 24px;
  display: flex;
  padding: 0 52.5px;
  align-items: flex-start;
  min-width: 327px;
  cursor: pointer;

  &.bottom-link.bottom-link-1 {
    padding: 0 58px;
  }
`;

const DontHaveAnAccoun = styled.div`
  min-height: 21px;
  min-width: 169px;
  font-weight: 500;
  color: var(--waterloo-);
  line-height: 21px;
  white-space: nowrap;
`;

const SignUp = styled.div`
  min-height: 21px;
  margin-left: 8px;
  font-weight: 500;
  color: var(--inkink-01);
  line-height: 21px;
  white-space: nowrap;
`;

const Text3 = styled.div`
  .bottom-link.bottom-link-1 & {
    min-width: 151px;
  }
`;

export default BottomLink;
