import React from "react";
import TitleLines from "../TitleLines";
import StyleTypeFill from "../StyleTypeFill";
import StyleTypeOutline from "../StyleTypeOutline";
import styled from "styled-components";
import "./Splash.css";

function Splash(props) {
  const { untitledDrawing31, titleLinesProps, styleTypeFillProps, styleTypeOutlineProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="splash screen">
        <TitleLines welcomeBack={titleLinesProps.welcomeBack} login={titleLinesProps.login} />
        <UntitledDrawing31 src={untitledDrawing31} />
        <BottomButtons>
          <StyleTypeFill>{styleTypeFillProps.children}</StyleTypeFill>
          <StyleTypeOutline>{styleTypeOutlineProps.children}</StyleTypeOutline>
        </BottomButtons>
      </div>
    </div>
  );
}

const UntitledDrawing31 = styled.img`
  width: 825px;
  height: 230px;
  margin-top: 18px;
  margin-left: -225px;
`;

const BottomButtons = styled.div`
  width: 375px;
  position: relative;
  margin-top: 18px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
`;

export default Splash;
