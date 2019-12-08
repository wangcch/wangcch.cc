import React from "react";
import { css } from "emotion";

import { wCode, w2Code } from "./txt";

// font family: STHeiti

const links = [
  {
    name: "github",
    src: "https://s.theyear.space/icons/github.svg",
    url: "https://github.com/wangcch",
  },
  {
    name: "twitter",
    src: "https://s.theyear.space/icons/twitter.svg",
    url: "https://twitter.com/_wangcch",
  },
  {
    name: "weibo",
    src: "https://s.theyear.space/icons/weibo.svg",
    url: "https://weibo.com/wangcch",
  },
];

export default function App() {
  console.info("%s\b", w2Code);

  return (
    <div className={styleApp}>
      <div className={styleContent}>{/* <pre>{wCode}</pre> */}</div>
      <div className={styleFooter}>
        <div style={{ height: "1em" }}>
          <img
            className={styleImg}
            src="https://s.theyear.space/my/wangcch.png?x-oss-process=style/jpg_q_90"
            alt="wangcch"
          />
          {links.map(link => (
            <a
              key={link.name}
              title={link.name}
              href={link.url}
              target="_block"
            >
              <img className={styleShareLink} src={link.src} alt={link.name} />
            </a>
          ))}
        </div>

        <h1 className={styleLogo}>
          {"@WANG"}
          <span>{"CCH"}</span>
        </h1>
      </div>
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
  flex-direction: column;
  padding: 1em;
`;

const styleContent = css`
  flex: 1;
  /* display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 720px) {
    transform: scale(0.6);
  } */
`;

const styleFooter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 100;
`;

const styleImg = css`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin-right: 0.5em;
`;

const styleShareLink = css`
  width: 1em;
  height: 1em;
  margin-left: 0.5em;
  opacity: 0.7;

  &:hover,
  &:checked {
    opacity: 1;
  }
`;

const styleLogo = css`
  font-size: 1em;
  line-height: 1em;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.8);
  padding: 0;
  margin: 0;
  user-select: none;

  span {
    color: rgba(43, 115, 175, 1);
  }
`;
