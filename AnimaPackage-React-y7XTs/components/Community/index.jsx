import React from "react";
import Magnifyingglass from "../Magnifyingglass";
import CardList from "../CardList";
import NavbarSimple from "../NavbarSimple";
import styled from "styled-components";
import { Headingh4, SfprotextRegularNormalShipGray17px } from "../../styledMixins";
import "./Community.css";

function Community(props) {
  const { feedFromCommunity, inputType, inputPlaceholder, cardListProps, navbarSimpleProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="community screen">
        <FeedFromCommunity>{feedFromCommunity}</FeedFromCommunity>
        <Content>
          <Magnifyingglass />
          <PlaceholderLabel name="placeholderlabel" placeholder={inputPlaceholder} type={inputType} />
        </Content>
        <CardList
          className={cardListProps.className}
          notificationCard2Props={cardListProps.notificationCard2Props}
          notificationCard22Props={cardListProps.notificationCard22Props}
          notificationCard23Props={cardListProps.notificationCard23Props}
          notificationCard24Props={cardListProps.notificationCard24Props}
        />
        <FloatingActionButton src="/img/floating-action-button-2@2x.svg" />
        <NavbarSimple className={navbarSimpleProps.className} />
      </div>
    </div>
  );
}

const FeedFromCommunity = styled.div`
  ${Headingh4}
  width: 343px;
  min-height: 32px;
  font-weight: 700;
  color: var(--inkink-01);
  line-height: 32px;
  white-space: nowrap;
`;

const Content = styled.div`
  height: 36px;
  position: relative;
  margin-top: 22px;
  margin-right: 14px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 327px;
  background-color: var(--alabaster);
  border-radius: 10px;
`;

const PlaceholderLabel = styled.input`
  ${SfprotextRegularNormalShipGray17px}
  width: 283px;
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
  margin-right: 7px;
`;

export default Community;
