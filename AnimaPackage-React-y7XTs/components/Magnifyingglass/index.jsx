import React from "react";
import styled from "styled-components";
import { SfprodisplayMediumShipGray18px, ValignTextMiddle } from "../../styledMixins";


function Magnifyingglass() {
  return (
    <Magnifyingglass1>
      <Magnifyingglass2>􀊫</Magnifyingglass2>
    </Magnifyingglass1>
  );
}

const Magnifyingglass1 = styled.div`
  width: 28px;
  display: flex;
  align-items: flex-start;
`;

const Magnifyingglass2 = styled.div`
  ${ValignTextMiddle}
  ${SfprodisplayMediumShipGray18px}
            width: 28px;
  height: 28px;
  text-align: center;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

const Magnifyingglass3 = styled.div`
  width: 28px;
  display: flex;
  align-items: flex-start;
`;

const Magnifyingglass4 = styled.div`
  ${ValignTextMiddle}
  ${SfprodisplayMediumShipGray18px}
            width: 28px;
  height: 28px;
  text-align: center;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

export default Magnifyingglass;
