import React from "react";
import TitleLines2 from "../TitleLines2";
import InputTypeTextBoxStateDefault from "../InputTypeTextBoxStateDefault";
import PasswordWrapper from "../PasswordWrapper";
import StyleTypeFill from "../StyleTypeFill";
import BottomLink from "../BottomLink";
import styled from "styled-components";
import "./Login.css";

function Login(props) {
  const {
    lifesaversBust2,
    titleLines2Props,
    inputTypeTextBoxStateDefaultProps,
    styleTypeFillProps,
    bottomLinkProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="login screen">
        <TitleLines2>{titleLines2Props.children}</TitleLines2>
        <LoginData>
          <LifesaversBust2 src={lifesaversBust2} />
          <LoginForm>
            <InputTypeTextBoxStateDefault
              inputType={inputTypeTextBoxStateDefaultProps.inputType}
              inputPlaceholder={inputTypeTextBoxStateDefaultProps.inputPlaceholder}
            />
            <PasswordWrapper />
          </LoginForm>
          <StyleTypeFill className={styleTypeFillProps.className}>{styleTypeFillProps.children}</StyleTypeFill>
          <BottomLink
            dontHaveAnAccoun={bottomLinkProps.dontHaveAnAccoun}
            signUp={bottomLinkProps.signUp}
            className={bottomLinkProps.className}
          />
        </LoginData>
      </div>
    </div>
  );
}

const LoginData = styled.div`
  width: 375px;
  position: relative;
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 535px;
`;

const LifesaversBust2 = styled.img`
  width: 176px;
  height: 263px;
  object-fit: cover;
`;

const LoginForm = styled.div`
  width: 327px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 137px;
`;

export default Login;
