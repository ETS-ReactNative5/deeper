import React from "react";
import styled from "styled-components";


function Indicators(props) {
  const { className } = props;

  return (
    <Indicators1 className={`indicators ${className || ""}`}>
      <Active className="active"></Active>
      <Default className="default"></Default>
      <Default className="default-1"></Default>
    </Indicators1>
  );
}

const Indicators1 = styled.div`
  height: 14px;
  display: flex;
  padding: 0 156.5px;
  align-items: flex-end;
  min-width: 343px;
`;

const Active = styled.div`
  width: 6px;
  height: 6px;
  background-color: var(--inkink-01);
  border-radius: 3px;
`;

const Default = styled.div`
  width: 6px;
  height: 6px;
  margin-left: 6px;
  background-color: var(--snuff);
  border-radius: 3px;
`;

const Default1 = styled.div`
  .indicators.indicators-1 & {
    background-color: var(--snuff);
  }
`;

const Active1 = styled.div`
  .indicators.indicators-1 & {
    background-color: var(--inkink-01);
  }
`;

const Default2 = styled.div`
  .indicators.indicators-2 & {
    background-color: var(--snuff);
  }
`;

const Active2 = styled.div`
  .indicators.indicators-2 & {
    background-color: var(--inkink-01);
  }
`;

export default Indicators;
