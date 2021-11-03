import React from "react";
import { Link } from "react-router-dom";
import Indicators from "../Indicators";
import styled from "styled-components";
import { Headingh3, Buttonbutton3, Paragraphp1 } from "../../styledMixins";
import "./Onboarding1.css";

function Onboarding1(props) {
  const { lifesaversOnline1, askAndShare, text12, skipTour } = props;

  return (
    <div className="container-center-horizontal">
      <div className="onboarding-1 screen">
        <Link to="/onboarding-2">
          <LifesaversOnline1 src={lifesaversOnline1} />
        </Link>
        <Link to="/onboarding-2">
          <Text>
            <Indicators />
            <AskAndShare>{askAndShare}</AskAndShare>
            <Text12>{text12}</Text12>
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

const LifesaversOnline1 = styled.img`
  width: 333px;
  height: 245px;
  margin-left: 6px;
  object-fit: cover;
  cursor: pointer;
`;

const Text = styled.div`
  width: 343px;
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 178px;
  cursor: pointer;
`;

const AskAndShare = styled.div`
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

const Text12 = styled.p`
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

export default Onboarding1;
