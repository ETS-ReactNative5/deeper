import React from "react";
import TitleLines2 from "../TitleLines2";
import InputTypeTextBoxStateDefault from "../InputTypeTextBoxStateDefault";
import PasswordWrapper from "../PasswordWrapper";
import StyleTypeFill from "../StyleTypeFill";
import BottomLink from "../BottomLink";
import styled from "styled-components";
import "./SignUp.css";

function SignUp(props) {
  const {
    lifesaversBust2,
    titleLines2Props,
    inputTypeTextBoxStateDefaultProps,
    inputTypeTextBoxStateDefault2Props,
    styleTypeFillProps,
    bottomLinkProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-up screen">
        <TitleLines2>{titleLines2Props.children}</TitleLines2>
        <SignUpData>
          <LifesaversBust2 src={lifesaversBust2} />
          <SignUpForm>
            <InputTypeTextBoxStateDefault
              inputType={inputTypeTextBoxStateDefaultProps.inputType}
              inputPlaceholder={inputTypeTextBoxStateDefaultProps.inputPlaceholder}
            />
            <InputTypeTextBoxStateDefault
              inputType={inputTypeTextBoxStateDefault2Props.inputType}
              inputPlaceholder={inputTypeTextBoxStateDefault2Props.inputPlaceholder}
              className={inputTypeTextBoxStateDefault2Props.className}
            />
            <PasswordWrapper />
          </SignUpForm>
          <StyleTypeFill className={styleTypeFillProps.className}>{styleTypeFillProps.children}</StyleTypeFill>
          <BottomLink dontHaveAnAccoun={bottomLinkProps.dontHaveAnAccoun} signUp={bottomLinkProps.signUp} />
        </SignUpData>
      </div>
    </div>
  );
}

const SignUpData = styled.div`
  width: 375px;
  position: relative;
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 597px;
`;

const LifesaversBust2 = styled.img`
  width: 176px;
  height: 263px;
  object-fit: cover;
`;

const SignUpForm = styled.div`
  width: 327px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 199px;
`;

export default SignUp;
