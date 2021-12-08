import React, { Children } from "react";
import styled from "styled-components";
import "./Link.css";

const Link = ({title, children}) => {
  return (
    <div className="LinkContainder">
      <Icon>
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#ff6a00" offset="0%" />
            <stop stopColor="#ee0979" offset="100%" />
          </linearGradient>
        </svg>
        {children}
      </Icon>
      <LinkText>{title}</LinkText>
    </div>
  );
};

const Icon = styled.div`
  svg {
    height: 2rem;
    width: 2rem;
  }
  cursor: pointer;
`;
const LinkText = styled.div`
  padding-left: 1rem;
  padding-top: 0.2rem;
  cursor: pointer;
`;

export default Link;
