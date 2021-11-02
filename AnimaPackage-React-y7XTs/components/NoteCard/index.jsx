import React from "react";
import styled from "styled-components";
import { Paragraphp1 } from "../../styledMixins";


function NoteCard(props) {
  const { children } = props;

  return (
    <NoteCard1>
      <Today>{children}</Today>
    </NoteCard1>
  );
}

const NoteCard1 = styled.div`
  height: 74px;
  margin-top: 10px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 343px;
  background-color: var(--palettewhite);
  border-radius: 12px;
  box-shadow: 0px 4px 8px #00000029;
`;

const Today = styled.div`
  ${Paragraphp1}
  width: 311px;
  min-height: 26px;
  font-weight: 500;
  color: var(--inkink-01);
  line-height: 26px;
  white-space: nowrap;
`;

const NoteCard2 = styled.div`
  height: 74px;
  margin-top: 10px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 343px;
  background-color: var(--palettewhite);
  border-radius: 12px;
  box-shadow: 0px 4px 8px #00000029;
`;

const Today1 = styled.div`
  ${Paragraphp1}
  width: 311px;
  min-height: 26px;
  font-weight: 500;
  color: var(--inkink-01);
  line-height: 26px;
  white-space: nowrap;
`;

export default NoteCard;
