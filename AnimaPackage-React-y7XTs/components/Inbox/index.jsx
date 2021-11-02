import React from "react";
import { Link } from "react-router-dom";
import Magnifyingglass from "../Magnifyingglass";
import CardList from "../CardList";
import NavbarSimple from "../NavbarSimple";
import styled from "styled-components";
import { Headingh4, SfprotextRegularNormalShipGray17px } from "../../styledMixins";
import "./Inbox.css";

function Inbox(props) {
  const { inbox, screenShot20211017At5212, inputType, inputPlaceholder, cardListProps, navbarSimpleProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inbox screen">
        <OverlapGroup>
          <Inbox1>{inbox}</Inbox1>
          <Link to="/friend-list">
            <ScreenShot20211017At5212 src={screenShot20211017At5212} />
          </Link>
        </OverlapGroup>
        <Content>
          <Magnifyingglass />
          <PlaceholderLabel name="placeholderlabel" placeholder={inputPlaceholder} type={inputType} />
        </Content>
        <CardList
          notificationCard2Props={cardListProps.notificationCard2Props}
          notificationCard22Props={cardListProps.notificationCard22Props}
          notificationCard23Props={cardListProps.notificationCard23Props}
          notificationCard24Props={cardListProps.notificationCard24Props}
        />
        <FloatingActionButton src="/img/floating-action-button-1@2x.svg" />
        <NavbarSimple className={navbarSimpleProps.className} />
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 343px;
  height: 32px;
  position: relative;
  margin-right: 2px;
`;

const Inbox1 = styled.div`
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

const ScreenShot20211017At5212 = styled.img`
  position: absolute;
  width: 34px;
  height: 32px;
  top: 0;
  left: 304px;
  object-fit: cover;
  cursor: pointer;
`;

const Content = styled.div`
  height: 36px;
  position: relative;
  margin-top: 25px;
  margin-right: 6px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 337px;
  background-color: var(--alabaster);
  border-radius: 10px;
`;

const PlaceholderLabel = styled.input`
  ${SfprotextRegularNormalShipGray17px}
  width: 293px;
  height: 22px;
  background-color: transparent;
  letter-spacing: -0.41px;
  line-height: 22px;
  white-space: nowrap;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #3c3c435c;
  }
`;

const FloatingActionButton = styled.img`
  width: 72px;
  height: 72px;
  align-self: flex-end;
  margin-top: 25px;
  margin-right: 8px;
`;

export default Inbox;
