import React, { useState } from "react";
import "./switchtab.scss";
const SwitchTab = ({ data, onTabChange }) => {
  const [selected, setSelected] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelected(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            onClick={() => activeTab(tab, index)}
            className={`tabItem ${selected === index ? "active" : " "}`}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTab;
