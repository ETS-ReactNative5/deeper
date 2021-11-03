import React from "react";
import SettingRow from "../SettingRow";
import NavbarSimple from "../NavbarSimple";
import styled from "styled-components";
import { Paragraphp3, Headingh4, ValignTextMiddle } from "../../styledMixins";
import "./SettingsV1.css";

function SettingsV1(props) {
  const {
    settings,
    lifesaversAvatar,
    name,
    text26,
    settingRowProps,
    settingRow2Props,
    settingRow3Props,
    settingRow4Props,
    settingRow5Props,
    settingRow6Props,
    navbarSimpleProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="settings-v1 screen">
        <Settings>{settings}</Settings>
        <ProfileInfo>
          <OverlapGroup>
            <ProfileImage>
              <LifesaversAvatar src={lifesaversAvatar} />
            </ProfileImage>
            <EditIcon>
              <IconEdit src="/img/icon-edit-5@2x.svg" />
            </EditIcon>
          </OverlapGroup>
          <Name>{name}</Name>
          <Text26>{text26}</Text26>
        </ProfileInfo>
        <OptionsList>
          <SettingRow account={settingRowProps.account} />
          <SettingRow account={settingRow2Props.account} className={settingRow2Props.className} />
          <SettingRow account={settingRow3Props.account} className={settingRow3Props.className} />
          <SettingRow account={settingRow4Props.account} className={settingRow4Props.className} />
          <SettingRow account={settingRow5Props.account} className={settingRow5Props.className} />
          <SettingRow account={settingRow6Props.account} className={settingRow6Props.className} />
        </OptionsList>
        <NavbarSimple className={navbarSimpleProps.className} />
      </div>
    </div>
  );
}

const Settings = styled.div`
  ${Headingh4}
  width: 343px;
  min-height: 32px;
  font-weight: 700;
  color: var(--inkink-01);
  line-height: 32px;
  white-space: nowrap;
`;

const ProfileInfo = styled.div`
  width: 343px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 186px;
`;

const OverlapGroup = styled.div`
  width: 122px;
  height: 112px;
  position: relative;
`;

const ProfileImage = styled.div`
  position: absolute;
  height: 112px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 112px;
  background-color: var(--inkink-06);
  border-radius: 100px;
`;

const LifesaversAvatar = styled.img`
  width: 96px;
  height: 96px;
`;

const EditIcon = styled.div`
  position: absolute;
  height: 36px;
  top: 76px;
  left: 86px;
  display: flex;
  padding: 0 7.5px;
  align-items: center;
  min-width: 36px;
  background-color: var(--palettewhite);
  border-radius: 100px;
  box-shadow: 0px 4px 8px #00000029;
`;

const IconEdit = styled.img`
  width: 21px;
  height: 20px;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${Headingh4}
            width: 343px;
  height: 32px;
  margin-top: 12px;
  font-weight: 700;
  color: var(--inkink-01);
  text-align: center;
  line-height: 32px;
  white-space: nowrap;
`;

const Text26 = styled.div`
  ${ValignTextMiddle}
  ${Paragraphp3}
            width: 343px;
  height: 18px;
  margin-top: 12px;
  font-weight: 500;
  color: var(--inkink-03);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

const OptionsList = styled.div`
  width: 375px;
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  align-items: flex-end;
  min-height: 276px;
`;

export default SettingsV1;
