import React from "react";
import styled from "styled-components";


function ModeLight() {
  return (
    <HomeIndicator>
      <HomeIndicator1></HomeIndicator1>
    </HomeIndicator>
  );
}

const HomeIndicator = styled.div`
  position: absolute;
  height: 34px;
  top: 534px;
  left: 0;
  display: flex;
  padding: 8px 120px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 375px;
`;

const HomeIndicator1 = styled.div`
  width: 134px;
  height: 5px;
  background-color: var(--black);
  border-radius: 100px;
`;

const HomeIndicator2 = styled.div`
  position: absolute;
  height: 34px;
  top: 534px;
  left: 0;
  display: flex;
  padding: 8px 120px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 375px;
`;

const HomeIndicator3 = styled.div`
  width: 134px;
  height: 5px;
  background-color: var(--black);
  border-radius: 100px;
`;

export default ModeLight;
