import React from "react";
import styled from "styled-components";
import { Paragraphp1 } from "../../styledMixins";


function SettingRow(props) {
  const { account, className } = props;

  return (
    <SettingRow1 className={`setting-row ${className || ""}`}>
      <IconPerson className="icon-person-1" src="/img/icon-person-5@2x.svg" />
      <Account className="account">{account}</Account>
      <IconRightArrow className="icon-right-arrow" src="/img/icon-right-arrow@2x.svg" />
    </SettingRow1>
  );
}

const SettingRow1 = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  min-width: 351px;

  &.setting-row.setting-row-1 {
    margin-top: 24px;
  }

  &.setting-row.setting-row-2 {
    margin-top: 24px;
  }

  &.setting-row.setting-row-3 {
    margin-top: 24px;
  }

  &.setting-row.setting-row-4 {
    margin-top: 24px;
  }

  &.setting-row.setting-row-5 {
    margin-top: 24px;
  }
`;

const IconPerson = styled.img`
  width: 20px;
  height: 20px;
`;

const Account = styled.div`
  ${Paragraphp1}
  width: 275px;
  min-height: 26px;
  margin-left: 16px;
  font-weight: 500;
  color: var(--inkink-02);
  line-height: 26px;
  white-space: nowrap;
`;

const IconRightArrow = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 16px;
`;

export default SettingRow;
