import React from "react";
import { Link } from "react-router-dom";
import NotificationCard3 from "../NotificationCard3";
import styled from "styled-components";
import { Headingh4 } from "../../styledMixins";
import "./FriendList.css";

function FriendList(props) {
  const {
    friendList,
    image4,
    notificationCard3Props,
    notificationCard32Props,
    notificationCard33Props,
    notificationCard34Props,
    notificationCard35Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="friend-list screen">
        <Link to="/inbox">
          <IconBack src="/img/icon-back@2x.svg" />
        </Link>
        <OverlapGroup>
          <CardList>
            <FriendList1>{friendList}</FriendList1>
            <NotificationCard3 notificationTitle={notificationCard3Props.notificationTitle} />
            <NotificationCard3
              notificationTitle={notificationCard32Props.notificationTitle}
              className={notificationCard32Props.className}
            />
            <NotificationCard3
              notificationTitle={notificationCard33Props.notificationTitle}
              className={notificationCard33Props.className}
            />
            <NotificationCard3
              notificationTitle={notificationCard34Props.notificationTitle}
              className={notificationCard34Props.className}
            />
            <NotificationCard3
              notificationTitle={notificationCard35Props.notificationTitle}
              className={notificationCard35Props.className}
            />
          </CardList>
          <Image4 src={image4} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const IconBack = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 6px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 349px;
  height: 691px;
  position: relative;
  align-self: flex-end;
  margin-top: 7px;
`;

const CardList = styled.div`
  position: absolute;
  width: 343px;
  top: 5px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 686px;
`;

const FriendList1 = styled.div`
  ${Headingh4}
  min-height: 32px;
  font-weight: 700;
  color: var(--inkink-01);
  line-height: 32px;
  white-space: nowrap;
`;

const Image4 = styled.img`
  position: absolute;
  width: 48px;
  height: 37px;
  top: 0;
  left: 301px;
  object-fit: cover;
`;

export default FriendList;
