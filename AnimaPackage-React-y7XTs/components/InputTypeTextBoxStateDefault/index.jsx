import React from "react";
import styled from "styled-components";
import { Border1pxInkink06, Paragraphp1 } from "../../styledMixins";


function InputTypeTextBoxStateDefault(props) {
  const { inputType, inputPlaceholder, className } = props;

  return (
    <FullNameTexBox className={`full-name-tex-box ${className || ""}`}>
      <Label className="label" name="label" placeholder={inputPlaceholder} type={inputType} required />
    </FullNameTexBox>
  );
}

const FullNameTexBox = styled.div`
  ${Border1pxInkink06}
  height: 46px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 327px;
  background-color: var(--palettewhite);
  border-radius: 8px;

  &.full-name-tex-box.email-text-box {
    margin-top: 16px;
  }
`;

const Label = styled.input`
  ${Paragraphp1}
  width: 287px;
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

export default InputTypeTextBoxStateDefault;
