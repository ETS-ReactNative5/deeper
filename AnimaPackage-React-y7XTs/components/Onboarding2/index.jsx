import React from "react";
import { Link } from "react-router-dom";
import Indicators from "../Indicators";
import styled from "styled-components";
import { Headingh3, Buttonbutton3, Paragraphp1 } from "../../styledMixins";
import "./Onboarding2.css";

function Onboarding2(props) {
  const { lifesaversSitting1, text24, text25, skipTour, indicatorsProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="onboarding-2 screen">
        <Link to="/onboarding-3">
          <LifesaversSitting1 src={lifesaversSitting1} />
        </Link>
        <Link to="/onboarding-3">
          <Text>
            <Indicators className={indicatorsProps.className} />
            <Text24>{text24}</Text24>
            <Text25>{text25}</Text25>
            <Link to="/home">
              <SkipButton>
                <SkipTour>{skipTour}</SkipTour>
              </SkipButton>
            </Link>
          </Text>
        </Link>
      </div>
    </div>
  );
}

const LifesaversSitting1 = styled.img`
  width: 284px;
  height: 310px;
  margin-left: 1px;
  object-fit: cover;
  cursor: pointer;
`;

const Text = styled.div`
  width: 343px;
  position: relative;
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 256px;
  cursor: pointer;
`;

const Text24 = styled.div`
  ${Headingh3}
  width: 343px;
  min-height: 42px;
  margin-top: 16px;
  font-weight: 700;
  color: var(--inkink-01);
  text-align: center;
  line-height: 42px;
  white-space: nowrap;
`;

const Text25 = styled.p`
  ${Paragraphp1}
  width: 343px;
  min-height: 116px;
  margin-top: 16px;
  font-weight: 500;
  color: var(--waterloo-);
  text-align: center;
  line-height: 26px;
`;

const SkipButton = styled.div`
  height: 16px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 343px;
  cursor: pointer;
`;

const SkipTour = styled.div`
  ${Buttonbutton3}
  width: 343px;
  min-height: 16px;
  font-weight: 600;
  color: var(--waterloo-);
  text-align: center;
  line-height: 16px;
  white-space: nowrap;
`;

export default Onboarding2;
