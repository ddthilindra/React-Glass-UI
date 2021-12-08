import React from "react";
import styled from "styled-components";
import "./Game.css";

const Game = ({ image, title, platform, percent }) => {
  return (
    <div className="GameContainer">
      <GameImage src={image} />
      <div className="GameTextContainer">
        <GameTitle>{title}</GameTitle>
        <Platform>{platform}</Platform>
        <ProgressBAR value={percent} max="100" />
      </div>
      <div className="Percent">{percent}%</div>
    </div>
  );
};

const GameImage = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 1rem;
`;

const GameTitle = styled.h2`
  font-size: 1.4rem;
`;

const Platform = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;

const ProgressBAR = styled.progress`
  border-radius: 0;
  width: 100%;
  height: 1.3em;
  &::-webkit-progress-bar {
    background-color: #c5c5c5;
    border-radius: 1rem;
  }
  &::-webkit-progress-value {
    background: #ee0979;
    background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
    background: linear-gradient(to right, #66dcd7, #517fc1);
    border-radius: 1rem;
  }
`;

export default Game;
