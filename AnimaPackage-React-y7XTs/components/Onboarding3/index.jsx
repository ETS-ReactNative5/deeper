import React from "react";
import { Link } from "react-router-dom";
import Indicators from "../Indicators";
import styled from "styled-components";
import { Headingh3, Buttonbutton3, Paragraphp1 } from "../../styledMixins";
import "./Onboarding3.css";

function Onboarding3(props) {
  const { lifesaversVideocall1, messageAndConnect, text18, skipTour, indicatorsProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="onboarding-3 screen">
        <Link to="/home">
          <LifesaversVideocall1 src={lifesaversVideocall1} />
        </Link>
        <Link to="/home">
          <Text>
            <Indicators className={indicatorsProps.className} />
            <MessageAndConnect>{messageAndConnect}</MessageAndConnect>
            <Text18>{text18}</Text18>
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

const LifesaversVideocall1 = styled.img`
  width: 372px;
  height: 322px;
  margin-left: 5px;
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
  min-height: 236px;
  cursor: pointer;
`;

const MessageAndConnect = styled.div`
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

const Text18 = styled.p`
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

export default Onboarding3;
