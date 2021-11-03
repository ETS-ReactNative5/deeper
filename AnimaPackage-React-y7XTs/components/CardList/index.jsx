import React from "react";
import NotificationCard2 from "../NotificationCard2";
import styled from "styled-components";


function CardList(props) {
  const {
    className,
    notificationCard2Props,
    notificationCard22Props,
    notificationCard23Props,
    notificationCard24Props,
  } = props;

  return (
    <CardList1 className={`card-list-1 ${className || ""}`}>
      <NotificationCard2 notificationTitle={notificationCard2Props.notificationTitle} />
      <NotificationCard2
        notificationTitle={notificationCard22Props.notificationTitle}
        className={notificationCard22Props.className}
      />
      <NotificationCard2
        notificationTitle={notificationCard23Props.notificationTitle}
        className={notificationCard23Props.className}
      />
      <NotificationCard2
        notificationTitle={notificationCard24Props.notificationTitle}
        className={notificationCard24Props.className}
      />
    </CardList1>
  );
}

const CardList1 = styled.div`
  width: 343px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 464px;

  &.card-list-1.card-list-2 {
    margin-top: 21px;
    margin-left: 2px;
  }
`;

export default CardList;
