import React from "react";
import { Link } from "react-router-dom";
import NotificationCard from "../NotificationCard";
import NavbarSimple from "../NavbarSimple";
import styled from "styled-components";
import { Headingh4 } from "../../styledMixins";
import "./Journal.css";

function Journal(props) {
  const { journal, screenShot20211017At5211, notificationCardProps, navbarSimpleProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="journal screen">
        <OverlapGroup>
          <Journal1>{journal}</Journal1>
          <Link to="/journal-entries">
            <ScreenShot20211017At5211 src={screenShot20211017At5211} />
          </Link>
        </OverlapGroup>
        <CardList>
          <NotificationCard
            inputType={notificationCardProps.inputType}
            inputPlaceholder={notificationCardProps.inputPlaceholder}
          />
        </CardList>
        <FloatingActionButton src="/img/floating-action-button@2x.svg" />
        <NavbarSimple className={navbarSimpleProps.className} />
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 343px;
  height: 32px;
  position: relative;
`;

const Journal1 = styled.div`
  ${Headingh4}
  position: absolute;
  width: 343px;
  top: 0;
  left: 0;
  font-weight: 700;
  color: var(--inkink-01);
  line-height: 32px;
  white-space: nowrap;
`;

const ScreenShot20211017At5211 = styled.img`
  position: absolute;
  width: 34px;
  height: 32px;
  top: 0;
  left: 300px;
  object-fit: cover;
  cursor: pointer;
`;

const CardList = styled.div`
  height: 519px;
  position: relative;
  margin-top: 27px;
  display: flex;
  align-items: flex-start;
  min-width: 343px;
`;

const FloatingActionButton = styled.img`
  width: 72px;
  height: 72px;
  align-self: flex-end;
  margin-top: 25px;
  margin-right: 8px;
`;

export default Journal;
