import React from "react";
import { css } from "emotion";

// font family: STHeiti

export default function App() {
  return (
    <div className={styleApp}>
      <img
        className={styleImg}
        src="https://s.theyear.space/my/wangcch.png?x-oss-process=style/jpg_q_90"
        alt="wangcch"
      />
      <p className={styleLogo}>
        {"@WANG"}
        <span>{"CCH"}</span>
      </p>
    </div>
  );
}

const styleApp = css`
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 100;
  padding: 16px;
`;

const styleImg = css`
  width: 18px;
  height: 18px;
  border-radius: 50%;
`;

const styleLogo = css`
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.8);
  padding: 0;
  margin: 0;
  user-select: none;

  span {
    color: rgba(43, 115, 175, 1);
  }
`;
