import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadTimelineData } from "anima-timeline";
import "./StyleTypeOutline.css";

function StyleTypeOutline(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x57344TimelineData);
  }, []);

  return (
    <Link to="/login">
      <div className="x57344 component component-wrapper not-ready">
        <div className="label-vP5K8y">{children}</div>
      </div>
    </Link>
  );
}

const x57344TimelineData = [
  {
    initial_state_name: "Style-Type=Outline",
    root_element: ".x57344",
    states_flow: {
      "Style-Type=Fill": {
        listeners: [],
        overrides: {},
      },
      "Style-Type=Outline": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default StyleTypeOutline;
