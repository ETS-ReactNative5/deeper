import React from "react";
import styled from "styled-components";
import { Border1pxInkink06, InterNormalDeluge14px, Paragraphp1 } from "../../styledMixins";


function NotificationCard3(props) {
  const { notificationTitle, className } = props;

  return (
    <NotificationCard className={`notification-card-14 ${className || ""}`}>
      <Round className="round"></Round>
      <TitleText className="title-text">
        <NotificationTitle className="notification-title-2">{notificationTitle}</NotificationTitle>
        <Text19 className="text-19">
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
        </Text19>
      </TitleText>
    </NotificationCard>
  );
}

const NotificationCard = styled.div`
  ${Border1pxInkink06}
  height: 104px;
  margin-top: 16px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 343px;
  background-color: var(--palettewhite);
  border-radius: 8px;
`;

const Round = styled.div`
  width: 10px;
  height: 10px;
  margin-bottom: 46px;
  background-color: var(--inkink-01);
  border-radius: 5px;
`;

const TitleText = styled.div`
  width: 285px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 72px;
`;

const NotificationTitle = styled.div`
  ${Paragraphp1}
  min-height: 26px;
  font-weight: 500;
  color: var(--inkink-01);
  line-height: 26px;
  white-space: nowrap;
`;

const Text19 = styled.p`
  ${InterNormalDeluge14px}
  width: 285px;
  min-height: 42px;
  margin-top: 4px;
  letter-spacing: 0;
  line-height: 21px;
`;

const Round1 = styled.div`
  .notification-card-14.notification-card-15 & {
    background-color: var(--paletteblue);
  }
`;

const Round2 = styled.div`
  .notification-card-14.notification-card-16 & {
    background-color: var(--royal-blue);
  }
`;

const Round3 = styled.div`
  .notification-card-14.notification-card-17 & {
    background-color: var(--royal-blue);
  }
`;

const Round4 = styled.div`
  .notification-card-14.notification-card-18 & {
    background-color: var(--royal-blue);
  }
`;

export default NotificationCard3;
