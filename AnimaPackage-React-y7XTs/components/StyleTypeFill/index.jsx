import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadTimelineData } from "anima-timeline";
import "./StyleTypeFill.css";

function StyleTypeFill(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(x57331TimelineData);
  }, []);

  return (
    <Link to="/sign-up">
      <div className={`x57331 component component-wrapper not-ready ${className || ""}`}>
        <div className="label-WjPzl3">{children}</div>
      </div>
    </Link>
  );
}

const x57331TimelineData = [
  {
    initial_state_name: "Style-Type=Fill",
    root_element: ".x57331",
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

export default StyleTypeFill;
