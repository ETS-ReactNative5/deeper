import React from "react";
import { Link } from "react-router-dom";
import HorizontalCard from "../HorizontalCard";
import NavbarSimple from "../NavbarSimple";
import styled from "styled-components";
import { Headingh4 } from "../../styledMixins";
import "./Home.css";

function Home(props) {
  const {
    hiKristin,
    lifesaversAvatar,
    horizontalCardProps,
    horizontalCard2Props,
    horizontalCard3Props,
    horizontalCard4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <HomeContainer>
          <TitleUserProfile>
            <HiKristin>{hiKristin}</HiKristin>
            <Link to="/settings-v1">
              <ProfileImage>
                <LifesaversAvatar src={lifesaversAvatar} />
              </ProfileImage>
            </Link>
          </TitleUserProfile>
          <HorizontalCard
            yourDietChart={horizontalCardProps.yourDietChart}
            lifesaversSerumBag={horizontalCardProps.lifesaversSerumBag}
          />
          <HorizontalCard
            yourDietChart={horizontalCard2Props.yourDietChart}
            lifesaversSerumBag={horizontalCard2Props.lifesaversSerumBag}
          />
          <HorizontalCard
            yourDietChart={horizontalCard3Props.yourDietChart}
            lifesaversSerumBag={horizontalCard3Props.lifesaversSerumBag}
            className={horizontalCard3Props.className}
          />
          <HorizontalCard
            yourDietChart={horizontalCard4Props.yourDietChart}
            lifesaversSerumBag={horizontalCard4Props.lifesaversSerumBag}
            className={horizontalCard4Props.className}
          />
        </HomeContainer>
        <NavbarSimple />
      </div>
    </div>
  );
}

const HomeContainer = styled.div`
  width: 375px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 650px;
`;

const TitleUserProfile = styled.div`
  display: flex;
  align-items: center;
  min-width: 343px;
`;

const HiKristin = styled.div`
  ${Headingh4}
  width: 281px;
  min-height: 32px;
  font-weight: 700;
  color: var(--inkink-01);
  line-height: 32px;
  white-space: nowrap;
`;

const ProfileImage = styled.div`
  height: 46px;
  margin-left: 16px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 46px;
  background-color: var(--inkink-06);
  border-radius: 100px;
  cursor: pointer;
`;

const LifesaversAvatar = styled.img`
  width: 30px;
  height: 30px;
`;

export default Home;
