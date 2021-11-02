import React from "react";
import styled from "styled-components";
import { Border1pxInkink06, Paragraphp1 } from "../../styledMixins";


function NotificationCard(props) {
  const { inputType, inputPlaceholder } = props;

  return (
    <NotificationCard1>
      <NotificationTitle name="notificationtitle" placeholder={inputPlaceholder} type={inputType} />
    </NotificationCard1>
  );
}

const NotificationCard1 = styled.div`
  ${Border1pxInkink06}
  height: 519px;
  display: flex;
  padding: 16px;
  align-items: flex-start;
  min-width: 343px;
  background-color: var(--palettewhite);
  border-radius: 8px;
`;

const NotificationTitle = styled.input`
  ${Paragraphp1}
  width: 311px;
  height: 26px;
  background-color: transparent;
  font-weight: 500;
  color: var(--inkink-01);
  line-height: 26px;
  white-space: nowrap;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #422c8199;
  }
`;

export default NotificationCard;
