import React from "react";
import styled from "styled-components";
import { Border1pxInkink06, InterNormalDeluge14px, Paragraphp1 } from "../../styledMixins";


function NotificationCard2(props) {
  const { notificationTitle, className } = props;

  return (
    <NotificationCard className={`notification-card-1 ${className || ""}`}>
      <NotificationTitle className="notification-title-1">{notificationTitle}</NotificationTitle>
      <Text4 className="text-4">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor</Text4>
    </NotificationCard>
  );
}

const NotificationCard = styled.div`
  ${Border1pxInkink06}
  width: 343px;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  align-items: center;
  min-height: 104px;
  background-color: var(--palettewhite);
  border-radius: 8px;

  &.notification-card-1.notification-card-2 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-3 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-4 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-6 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-7 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-8 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-9 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-10 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-11 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-12 {
    margin-top: 16px;
  }

  &.notification-card-1.notification-card-13 {
    margin-top: 16px;
  }
`;

const NotificationTitle = styled.div`
  ${Paragraphp1}
  width: 311px;
  min-height: 26px;
  font-weight: 500;
  color: var(--inkink-01);
  line-height: 26px;
  white-space: nowrap;
`;

const Text4 = styled.p`
  ${InterNormalDeluge14px}
  width: 311px;
  min-height: 42px;
  margin-top: 4px;
  letter-spacing: 0;
  line-height: 21px;
`;

export default NotificationCard2;
