import React from "react";
import { Link } from "react-router-dom";
import HorizontalCard from "../HorizontalCard";
import ModeLight from "../ModeLight";
import NoteCard from "../NoteCard";
import styled from "styled-components";
import { Paragraphp1 } from "../../styledMixins";
import "./HealthIndex.css";

function HealthIndex(props) {
  const { today, image1, horizontalCardProps, noteCardProps, noteCard2Props, noteCard3Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="health-index screen">
        <Link to="/home">
          <IconBack src="/img/icon-back@2x.svg" />
        </Link>
        <HorizontalCard
          yourDietChart={horizontalCardProps.yourDietChart}
          lifesaversSerumBag={horizontalCardProps.lifesaversSerumBag}
          className={horizontalCardProps.className}
        />
        <OverlapGroup>
          <ModeLight />
          <ModeLight />
          <CardList>
            <NoteCard1>
              <Today>{today}</Today>
              <Image1 src={image1} />
            </NoteCard1>
            <NoteCard>{noteCardProps.children}</NoteCard>
            <NoteCard>{noteCard2Props.children}</NoteCard>
            <NoteCard>{noteCard3Props.children}</NoteCard>
          </CardList>
        </OverlapGroup>
      </div>
    </div>
  );
}

const IconBack = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 16px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 375px;
  height: 900px;
  position: relative;
  margin-top: 24px;
  border-radius: 16px;
`;

const CardList = styled.div`
  position: absolute;
  width: 375px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  align-items: center;
  min-height: 900px;
  background-color: var(--inkink-06);
  border-radius: 16px;
`;

const NoteCard1 = styled.div`
  width: 343px;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  align-items: center;
  min-height: 283px;
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

const Image1 = styled.img`
  width: 280px;
  height: 200px;
  margin-top: 8px;
  margin-right: 31px;
  object-fit: cover;
`;

export default HealthIndex;
