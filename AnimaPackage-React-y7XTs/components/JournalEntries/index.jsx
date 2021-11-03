import React from "react";
import { Link } from "react-router-dom";
import NotificationCard2 from "../NotificationCard2";
import styled from "styled-components";
import { Headingh4 } from "../../styledMixins";
import "./JournalEntries.css";

function JournalEntries(props) {
  const {
    pastEntries,
    image4,
    notificationCard2Props,
    notificationCard22Props,
    notificationCard23Props,
    notificationCard24Props,
    notificationCard25Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="journal-entries screen">
        <Link to="/journal">
          <IconBack src="/img/icon-back@2x.svg" />
        </Link>
        <OverlapGroup>
          <CardList>
            <PastEntries>{pastEntries}</PastEntries>
            <NotificationCard2
              notificationTitle={notificationCard2Props.notificationTitle}
              className={notificationCard2Props.className}
            />
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
            <NotificationCard2
              notificationTitle={notificationCard25Props.notificationTitle}
              className={notificationCard25Props.className}
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

const PastEntries = styled.div`
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

export default JournalEntries;
