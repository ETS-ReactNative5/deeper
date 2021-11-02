import React from "react";
import styled from "styled-components";
import { Border1pxInkink06, Paragraphp1 } from "../../styledMixins";


function InputTypeTextBoxStateDefault2() {
  return (
    <PasswordTextBox>
      <Label name="label" placeholder="Password" type="password" required />
      <IconEye src="/img/icon-eye@2x.svg" />
    </PasswordTextBox>
  );
}

const PasswordTextBox = styled.div`
  ${Border1pxInkink06}
  height: 46px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 327px;
  background-color: var(--palettewhite);
  border-radius: 8px;
`;

const Label = styled.input`
  ${Paragraphp1}
  width: 239px;
  height: 26px;
  background-color: transparent;
  font-weight: 500;
  color: var(--inkink-03);
  line-height: 26px;
  white-space: nowrap;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #7b6ba899;
  }
`;

const IconEye = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;
`;

const PasswordTextBox1 = styled.div`
  ${Border1pxInkink06}
  height: 46px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 327px;
  background-color: var(--palettewhite);
  border-radius: 8px;
`;

const Label1 = styled.input`
  ${Paragraphp1}
  width: 239px;
  height: 26px;
  background-color: transparent;
  font-weight: 500;
  color: var(--inkink-03);
  line-height: 26px;
  white-space: nowrap;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #7b6ba899;
  }
`;

const IconEye1 = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;
`;

export default InputTypeTextBoxStateDefault2;
