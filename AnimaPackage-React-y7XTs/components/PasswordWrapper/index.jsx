import React from "react";
import InputTypeTextBoxStateDefault2 from "../InputTypeTextBoxStateDefault2";
import styled from "styled-components";
import { Paragraphp2 } from "../../styledMixins";


function PasswordWrapper() {
  return (
    <PasswordWrapper1>
      <InputTypeTextBoxStateDefault2 />
      <Text1>Forgot Password?</Text1>
    </PasswordWrapper1>
  );
}

const PasswordWrapper1 = styled.div`
  width: 327px;
  position: relative;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 75px;
`;

const Text1 = styled.div`
  ${Paragraphp2}
  width: 327px;
  min-height: 21px;
  margin-top: 8px;
  font-weight: 500;
  color: var(--inkink-01);
  text-align: right;
  line-height: 21px;
  white-space: nowrap;
`;

const PasswordWrapper2 = styled.div`
  width: 327px;
  position: relative;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 75px;
`;

const Text2 = styled.div`
  ${Paragraphp2}
  width: 327px;
  min-height: 21px;
  margin-top: 8px;
  font-weight: 500;
  color: var(--inkink-01);
  text-align: right;
  line-height: 21px;
  white-space: nowrap;
`;

export default PasswordWrapper;
