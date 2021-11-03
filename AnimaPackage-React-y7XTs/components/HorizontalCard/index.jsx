import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Headingh5, ValignTextMiddle } from "../../styledMixins";


function HorizontalCard(props) {
  const { yourDietChart, lifesaversSerumBag, className } = props;

  return (
    <Link to="/daily-check-up">
      <HorizontalCard1 className={`horizontal-card ${className || ""}`}>
        <YourDietChart className="your-diet-chart">{yourDietChart}</YourDietChart>
        <LifesaversSerumBag className="lifesavers-serum-bag" src={lifesaversSerumBag} />
      </HorizontalCard1>
    </Link>
  );
}

const HorizontalCard1 = styled.div`
  height: 135px;
  margin-top: 16px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 343px;
  background-color: var(--inkink-06);
  border-radius: 12px;
  cursor: pointer;

  &.horizontal-card.horizontal-card-2 {
    cursor: unset;
  }

  &.horizontal-card.horizontal-card-3 {
    cursor: unset;
  }

  &.horizontal-card.horizontal-card-4 {
    height: 112px;
    align-self: center;
    margin-top: 26px;
    margin-left: 2px;
    cursor: unset;
  }

  &.horizontal-card.horizontal-card-5 {
    height: 116px;
    align-self: center;
    margin-top: 24px;
    cursor: unset;
  }
`;

const YourDietChart = styled.div`
  ${ValignTextMiddle}
  ${Headingh5}
            width: 149px;
  height: 26px;
  font-weight: 700;
  color: var(--inkink-01);
  line-height: 26px;
  white-space: nowrap;
`;

const LifesaversSerumBag = styled.img`
  width: 144px;
  height: 108px;
  margin-left: 14px;
`;

export default HorizontalCard;
